import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import CafeInfo from "../../components/cafe_info/cafe_info"
import './cafe_page.css'

export const CafePage = ({
  cafe_name,
  imgSrc,
  cardData
}) =>{
  var rate_sum = 0
  for(var i = 0; i < cardData.length; i++){
    rate_sum += cardData[i].rate
  }
  var rate = Math.round((rate_sum / cardData.length) * 10) / 10
  return (
    <div className="cafe-page-container">
      <Navbar />
      <CafeInfo
        imgSrc={imgSrc}
        cafe_name={cafe_name}
        overall_rating={rate}
      />
      <div className="cards-grid">
        {cardData.map((data, index) => (
          <Card
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            rate={data.rate}
            comment_num={data.comment_num}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CafePage

