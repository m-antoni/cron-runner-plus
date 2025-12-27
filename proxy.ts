export { auth as proxy } from '@/app/lib/auth';

export const config = {
  // This matcher is what actually protects your route group
  matcher: ['/dashboard/:path*', '/jobs/:path*', '/logs/:path*', '/contact/:path*'],
};
