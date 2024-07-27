import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search retreats by title"
        className="border p-2 rounded w-full md:w-auto"
      />
      <button onClick={handleSearch} className="bg-blue-800 text-white p-2 rounded">Search</button>
    </div>
  );
};

export default SearchBar;
