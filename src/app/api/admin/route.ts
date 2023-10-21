import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    // validate username and password

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

export async function DELETE(request: Request) {
  try {
    const { username } = await request.json();
    if (username === 'admin') {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      );
    }

    const response = await sql`
      DELETE FROM users WHERE username=${username}
    `;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}
