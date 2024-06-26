import React, { useState } from 'react';

// OrderDropDown component for selecting sorting order
const OrderDropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='h-12 w-60 flex items-center border rounded-l p-4 bg-white'>
      <select id='dropdown' value={selectedOption} onChange={handleSelectChange}>
        <option value="Default Order">Default Order</option>
        <option value="Featured">Featured</option>
        <option value="Top Viewed">Top Viewed</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
};

export default OrderDropDown;
