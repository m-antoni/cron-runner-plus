'use client';

import { signInWithGithub, signInWithGoogle, signOutProvider } from '@/app/actions/auth';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function SignInButton() {
  return (
    <>
      <Button className="btn btn-info" onClick={() => signInWithGoogle()}>
        Continue with Google
      </Button>
      <hr />
      <Button href="#" className="btn btn-warning" onClick={() => signInWithGithub()}>
        Continue with Github
      </Button>
    </>
  );
}
