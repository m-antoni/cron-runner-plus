import { useSession } from 'next-auth/react';

export const useUser = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    userId: session?.user?.id,
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
  };
};
