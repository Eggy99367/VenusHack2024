import React from 'react';
import './cafe_info.css'

function CafeInfo({
    imgSrc,
    cafe_name,
    over_all_rate
}) {
  const style = {
    height: '300px',  // Adjust the height as needed
    width: '100%',    // Adjust the width as needed
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover',  // Ensure the image covers the whole div
    backgroundPosition: 'center',  // Center the background image
    display: 'flex',  // Optional, for layout purposes
    justifyContent: 'center',  // Optional, for layout purposes
    alignItems: 'center'  // Optional, for layout purposes
  };
  return (
    <div className='cafe-info-container' style={style}>
        <h1>{cafe_name}</h1>
    </div>
  );
}

export default CafeInfo;
