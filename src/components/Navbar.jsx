import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">JobTracker</h1>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="text-sm font-medium transition-colors hover:text-indigo-400">
          Dashboard
        </Link>
        <Link to="/add" className="text-sm font-medium transition-colors hover:text-indigo-400">
          Add Job
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
