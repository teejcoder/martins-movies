import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

// SearchBar component for searching movies
const SearchBar = ({ setSearchTerm }) => {
  const [searchText, setSearchText] = useState('');

  // Handle input change event
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSearchTerm(searchText);
  };

  return (
    // Form container
    <form className='flex' onSubmit={handleSubmit}> {/* Add onSubmit handler to the form */}
      {/* Input field for search */}
      <input 
        type="text" 
        placeholder="Search by keyword" 
        value={searchText}
        onChange={handleInputChange}
        className="relative sh-16 z-50 rounded-md focus:outline-none focus:border-blue-500"
      />
      {/* Search button */}
      <button type="submit"> {/* Change button type to submit */}
        <IoSearch size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
