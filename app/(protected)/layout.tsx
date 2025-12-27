import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import { SessionProvider } from 'next-auth/react';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <div className="wrapper">
          <Sidebar />
          <div className="main-panel">
            <Navbar />
            <div className="content">{children}</div>
          </div>
        </div>
      </SessionProvider>
    </>
  );
}
