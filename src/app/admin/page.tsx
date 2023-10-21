import AddUser from '@/components/forms/AddUser';
import DeleteUser from '@/components/forms/DeleteUser';
import React from 'react';

export default function Admin() {
  return (
    <div>
      <h1>Admin page</h1>
      <AddUser />
      <DeleteUser />
    </div>
  );
}
