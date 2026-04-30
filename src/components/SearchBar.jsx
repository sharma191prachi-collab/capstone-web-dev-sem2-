import React from 'react';
import { useJob } from '../context/JobContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useJob();

  return (
    <input
      type="text"
      placeholder="Search by company..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    />
  );
};

export default SearchBar;
