import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username:", type: "text", placeholder: "your username" },
        password: { label: "Password:", type: "password", placeholder: "your password" }
      },
      async authorize(credentials: any) {
        try {
          const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/login`, {
            email: credentials.email,
            password: credentials.password
          });

          const { status, token } = loginResponse.data;

          if (status === 'success' && token) {
            const userInfoResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/user/email/${credentials.email}`, {
              headers: { Authorization: `Bearer ${token}` }
            });

            const userData = userInfoResponse.data;
            userData.data.token = token;

            if (userData) {
              return userData.data;
            }
          }

          return null;

        } catch (error) {
          console.error("Error authorizing user:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      if (account.provider === 'google') {
        try {
          const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/user/login/pairing`, {
            email: user.email,
            pair_token: process.env.GOOGLE_NEXTJS_LARAVEL_TOKEN
          });

          const { status, token } = loginResponse.data;
          if (status === 'success' && token) {
            const userInfoResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/user/email/${user.email}`, {
              headers: { Authorization: `Bearer ${token}` }
            });

            const userData = userInfoResponse.data;
            userData.data.token = token;

            if (userData) {
              user.id = userData.data.id;
              user.token = userData.data.token;
              user.firstname = userData.data.firstname;
              user.middlename = userData.data.middlename;
              user.lastname = userData.data.lastname;

              return true;
            }
          }
          return false; // Return false instead of null
        } catch (error) {
          console.error("Error during Google sign-in:", error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
        token.firstname = user.firstname;
        token.middlename = user.middlename;
        token.lastname = user.lastname;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.token = token.token;
      session.user.firstname = token.firstname;
      session.user.middlename = token.middlename;
      session.user.lastname = token.lastname;
      return session;
    }
  }
};

export default NextAuth(authOptions);
