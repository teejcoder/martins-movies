import React from 'react'

const SearchBar = () => {
  return (
    <div className='h-16 w-full bg-white flex items-center justify-between'>
        <input type="text" placeholder="Search by keyword" className="w-screen h-16 px-2 py-1 z-50 rounded-md focus:outline-none focus:border-blue-500" />

        <p>X</p>
    </div>
  )
}

export default SearchBar