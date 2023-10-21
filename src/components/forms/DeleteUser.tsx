'use client';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/admin`, {
      method: 'DELETE',
      body: JSON.stringify({
        username: formData.get('username'),
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
      <button type="submit">Delete admin</button>
    </form>
  );
}