import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        //
        const response = await sql`
        SELECT * FROM users WHERE username=${credentials?.username}`;
        const user = response.rows[0];

        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );

        console.log({ passwordCorrect });

        if (passwordCorrect) {
          return {
            id: user.id,
            username: user.username,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };