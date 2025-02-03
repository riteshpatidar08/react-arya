import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function UsersDetails() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const { userid } = useParams();
  console.log(userid);

  const detailsData = [
    { id: 1, name: 'Virat', description: 'lorem ipsum virat' },
    { id: 2, name: 'Rohit', description: 'lorem ipsum rohit' },
  ];

  const findData = detailsData.find((user) => user.id === parseInt(userid));
  console.log(findData);
  return (
    <div>
      <h1 className="text-4xl font-bold">{findData.name}</h1>
      <h1 className="text-4xl font-bold">{findData.description}</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}

export default UsersDetails;
