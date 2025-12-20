import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const CRON_SECRET = process.env.CRON_SECRET;

  if (token !== CRON_SECRET) {
    return NextResponse.json({ status: 'Unauthorized', message: 'Invalid token' }, { status: 401 });
  }

  return NextResponse.json({
    app: 'Cron Runner Plus NextJS',
    status: 'ok',
    timestamp: new Date().toISOString(),
    created_by: 'Michael Antoni',
    message: '⚡NextJS API is healthy.',
  });
}
