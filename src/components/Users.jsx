import React from 'react';
import { Link } from 'react-router-dom';
function Users() {
  const userData = [
    { id: 1, name: 'Virat' },
    { id: 2, name: 'Rohit' },
    { id: 3, name: 'Gill' },
  ];
  return (
    <div>
      <ul className="cursor-pointer">
        {userData.map((user) => (
          <li key={user.id} className="text-4xl font-bold hover:underline">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
