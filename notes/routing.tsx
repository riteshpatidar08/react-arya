import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function HomePage() {
    const navigate = useNavigate()
  const handleClick = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/');
      if (res.data) {
        navigate('/blogs')
      }
    } catch (error) {}
  };
  return (
    <div>
      <h1>Homepage</h1>
      <button
        onClick={handleClick}
        className="px-10 rounded-lg cursor-pointer py-2 bg-sky-400 text-white"
      >
        Fetch random user
      </button>
    </div>
  );
}

export default HomePage;
