'use server';

import { signIn, signOut } from '@/app/lib/auth';

export const signInWithGoogle = async () => {
  await signIn('google', { redirectTo: '/cronlabs' });
};

export const signInWithGithub = async () => {
  await signIn('github', { redirectTo: '/cronlabs' });
};
export const signInWithFacebook = async () => {
  await signIn('facebook', { redirectTo: '/cronlabs' });
};

export const signOutProvider = async () => {
  await signOut({ redirectTo: '/auth/sign-in' });
};
