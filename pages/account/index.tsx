import DefaultLayout from "@/layouts/default";
import { getServerSession } from "next-auth";
import { User } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context:any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function AccountPage({ session }: any) {
  // console.log(session);
  return (

    <DefaultLayout>
      
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {session ? (
            <>
 
            <User
            avatarProps={{radius: "lg", src: session.user.image}}
            description={session.user.email}
  
            name={`${session.user.firstname} ${session.user.middlename ? session.user.middlename.charAt(0) + '.' : ''} ${session.user.lastname}`}
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
