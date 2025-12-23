import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Here we tell TypeScript that the 'user' object
   * inside the 'session' will now have an 'id' property.
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
