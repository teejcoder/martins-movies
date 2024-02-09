import React from 'react';

// BottomBannerRow component representing a row in the bottom banner section.
const BottomBannerRow = ({ children }) => {
  return (
    <div className='h-full w-full sm:w-4/5 mb-8 md:flex flex-wrap sm:flex-col sm:p-10'>
      {/* Render children components */}
      {children}
    </div>
  );
};

export default BottomBannerRow;
