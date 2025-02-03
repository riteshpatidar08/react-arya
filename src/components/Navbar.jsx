import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header className="bg-[#121212] h-16 justify-between text-white flex">
      <div>
        <h1>Title</h1>
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
