import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { useSession, signIn, signOut } from 'next-auth/react';


export default function LibActivities() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Lib Activities</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
