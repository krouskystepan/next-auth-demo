'use client';
import React, { useRef } from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  const userName = useRef('');
  const pass = useRef('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (!res?.error) {
      router.push("http://localhost:3000");
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={onSubmit} className="p-2 flex flex-col gap-3">
        <input
          placeholder="username"
          type="text"
          style={{ padding: '1rem', color: 'black', borderRadius: '.5rem' }}
          onChange={(e) => (userName.current = e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          style={{ padding: '1rem', color: 'black', borderRadius: '.5rem' }}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <div className="flex items-center justify-center mt-2 gap-2">
          <button
            type="submit"
            style={{
              border: '1px solid white',
              borderRadius: '.5rem',
              width: '100%',
              padding: '.5rem',
            }}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
