import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth";
import { signOut } from 'next-auth/react';
import { User } from "@nextui-org/react";

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // Ensure session.user is defined and set default values if necessary

  if (session && session.user) {
    if (session.user.email === undefined) {
      session.user.email = null;
    }
    if (session.user.image === undefined) {
      session.user.image = null;
    }

    if (session.user.name === undefined) {
      session.user.name = session.user.email;
    }
  }

  return {
    props: {
      session,
    },
  };
}

export default function AccountPage({ session }: any) {
  return (

    <DefaultLayout>
      
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {session ? (
            <>
 
            <User
            avatarProps={{radius: "lg", src: session.user.image}}
            description={session.user.name}
            name={session.user.email}
          >
            {session.user.email}
          </User>
          <br />
             
                
              <button
                onClick={() => signOut()}
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <h1>No Session</h1>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
