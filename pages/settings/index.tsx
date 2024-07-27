import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Skeleton, User } from "@nextui-org/react";

import { useSession } from 'next-auth/react';
import QRCode from "react-qr-code";

export default function Settings() {
  const { data: session, status } = useSession();

  return (
    <DefaultLayout>
         <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
         <div className="inline-block max-w-lg text-center justify-center">
        {session ? (
        
            <Card className="max-w-[400px]">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt="nextui logo"
                      height={40}
                      radius="sm"
                      src={session.user.image ?? ' '}
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">{session.user.firstname} {session.user?.middlename} {session.user.lastname}</p>
                      <p className="text-small text-default-500">{session.user.email}</p>
                    </div>
                  </CardHeader>
                  <Divider/>
                  <CardBody>
                      <QRCode value={`${session.user.email}`} />
                  </CardBody>
                  <Divider/>
                  <CardFooter>
                  </CardFooter>
                </Card>
          ) : (
            <Card className="w-[200px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">  
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          )}

</div>
</section>
    </DefaultLayout>
  );
}
