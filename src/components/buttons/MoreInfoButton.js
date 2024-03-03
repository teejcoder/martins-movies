import React from 'react';

// MoreInfoButton represents a button for displaying more information
const MoreInfoButton = ({ imdbLink }) => {
  return (
    <a href={imdbLink} target='_blank' rel="noopener noreferrer" className='w-24 h-8 bg-purple text-sm text-white font-bold rounded flex items-center justify-center'>
        <p>MORE INFO</p>
    </a>
  );
};

export default MoreInfoButton;