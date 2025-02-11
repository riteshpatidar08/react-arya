import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
  const count = useSelector((state) => {
    return state.count.count;
  });
  return (
    <header className="bg-[#121212] h-16 justify-between text-white flex">
      <div>
        <h1>Title</h1>
        <h1 className="text-white text-3xl">{count}</h1>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </header>
  );
}

export default Navbar;
