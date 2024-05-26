import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import CafeInfo from "../../components/cafe_info/cafe_info";
import "./fav_page.css";
import { Spacer } from "@chakra-ui/react";

export const FavPage = ({ cafe_name, imgSrc, cardData }) => {
  const flattenedCardData = Object.values(cardData).flat();
  var rate_sum = 0;
  for (var i = 0; i < flattenedCardData.length; i++) {
    rate_sum += flattenedCardData[i].rate;
  }
  var rate = Math.round((rate_sum / flattenedCardData.length) * 10) / 10;

  return (
    <div className="cafe-page-container">
      <div>
        <Navbar />
      </div>
      <div className="empty"></div>
      <CafeInfo imgSrc={imgSrc} cafe_name={cafe_name} overall_rating={rate} />
      {Object.entries(cardData).map(([category, cards]) => (
        <div className={"subtitle"} key={category}>
          <h1 className="category-heading">{category}</h1>
          <div className="cards-grid">
            {cards.map((data, index) => (
              <Card
                fav={data.fav}
                id={data.id}
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
      ))}
    </div>
  );
};

export default FavPage;
