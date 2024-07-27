import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
      user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        token?: string;
        middlename?:string;
        firstname?: string;
        lastname?: string;
      };
    }
  
    interface User {
      id?: string;
      token?: string;
      firstname?: string;
      middlename?: string;
      lastname?: string;
    }
  }