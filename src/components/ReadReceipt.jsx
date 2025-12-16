import React from 'react';

const ReadReceipt = ({ isRead }) => {
  const color = isRead ? '#4fc3f7' : '#999';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        marginLeft: '4px',
        transform: 'translateY(2px)',
        flexShrink: 0,   
         width: '14px',
         height: '14px',
        marginLeft: '2px',
        alignSelf: 'flex-end'

      }}
    >
   
      <polyline points="2 12 7 17 13 9" />

    
      <polyline points="9 12 14 17 20 9" />
      
    </svg>
  );
};

export default ReadReceipt;
