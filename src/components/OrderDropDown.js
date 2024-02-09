import React, { useState } from 'react'

const OrderDropDown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

  return (
    <div className='h-12 w-60 flex items-center  border rounded-l p-4 bg-white'>
        <select id='dropdown' value={selectedOption} onChange={handleSelectChange}>
            <option value="Default Order">Default Order</option>
            <option value="Featured">Featured</option>
            <option value="Top Viewed">Top Viewed</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
        </select>
    </div>
  )
}

export default OrderDropDown;


// import React, { useState } from 'react';

// const Dropdown = () => {


//   return (
//     <div>
//       <label htmlFor="dropdown">Choose an option:</label>
//       <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
//         <option value="">Select an option</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <p>Selected option: {selectedOption}</p>
//     </div>
//   );
// };

// export default Dropdown;
