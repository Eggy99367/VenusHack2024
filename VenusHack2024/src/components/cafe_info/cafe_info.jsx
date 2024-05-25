import React from 'react';
import { StarRating } from '../star_rating/star_rating'
import './cafe_info.css'

function CafeInfo({
    imgSrc,
    cafe_name,
    overall_rating,
}) {
  const style = {
    height: '300px',
    width: '100%',
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div className='cafe-info-container' style={style}>
      <h1>{cafe_name}</h1>

      <div className='rating-container'>
        <div style={{width: '5%'}}>
          <p>{overall_rating ?? '0'}</p>
        </div>
        <div style={{width: '200px'}}>
          {overall_rating ? <StarRating value={overall_rating} /> : <StarRating value={0} />}
        </div>
      </div>
    </div>
  );
}

export default CafeInfo;
