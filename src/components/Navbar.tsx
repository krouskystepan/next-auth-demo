import Logout from '@/app/logout';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <nav>
      {!!session && <Logout />}
      {!session && <Link href="/login">Login</Link>}
    </nav>
  );
}
