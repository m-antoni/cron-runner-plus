'use server';

import SignInButton from '@/app/components/ui/SignInButton';
import { auth } from '@/app/lib/auth';

export default async function CronJobs() {
  const session = await auth();

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="col-4">
        <div className="card">
          <div className="card-header">
            <img src={session?.user?.image} />
            <div>{session?.user?.name}</div>
            <div>{session?.user?.email}</div>
          </div>
          <div className="card-body">
            <center>
              <SignInButton />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
