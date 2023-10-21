import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    // validate username and password
    console.log({ username, password });

    const hashedPassword = await hash(password, 10);

    const response = await sql`
      INSERT INTO users (username, password)
      VALUES (${username}, ${hashedPassword})
    `;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}
