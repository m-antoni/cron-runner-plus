import { auth } from '@/app/lib/auth';
import Image from 'next/image';

export default async function ProfileImage() {
  const session = await auth();

  // Use the session image or the fallback anime image
  const picture = session?.user?.image || '/assets/img/anime3.png';

  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image
        src={picture}
        alt="Profile Photo"
        fill // This makes it fill the container
        className="object-cover"
        referrerPolicy="no-referrer" // Critical for Google/FB images to load
      />
    </div>
  );
}
