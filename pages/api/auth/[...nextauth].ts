import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Username:",
                    type: "text",
                    placeholder:"your username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder:"your password"
                }
            },
            async authorize(credentials:any){
                const user = {email: "admin", password: "password"}
                if(credentials?.email === user.email && credentials?.password == user.password){
                    return user as any
                }else{
                    return null
                }
            }
        })
    ],
  }

export default NextAuth(authOptions)