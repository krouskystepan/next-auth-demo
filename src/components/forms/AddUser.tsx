'use client';

import { FormEvent, useState } from 'react';

export default function Form() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/admin`, {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password'),
      }),
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row gap-2 mt-10"
    >
      <input
        name="username"
        className="border border-black text-black"
        type="text"
      />
      <input
        name="password"
        className="border border-black  text-black"
        type="password"
      />
      <button type="submit">Add admin</button>
    </form>
  );
}