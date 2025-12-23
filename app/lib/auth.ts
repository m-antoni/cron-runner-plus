import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/app/lib/prisma';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';

// This will help us see if the module is loading correctly in the terminal
console.log('Auth Module Loading - Prisma exists:', !!prisma);

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  // Use the adapter here
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true, // Add this
    }),
    GitHub({
      allowDangerousEmailAccountLinking: true, // Add this
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session?.user && user?.id) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
