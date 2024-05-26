import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import "./like_page.css";

export const LikePage = ({ cardData }) => {
  const style = {
    height: "350px",
    width: "90%",
    backgroundPosition: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "cover",
    alignItems: "center",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
  };
  const flattenedCardData = Object.values(cardData).flat();
  var rate_sum = 0;
  for (var i = 0; i < flattenedCardData.length; i++) {
    rate_sum += flattenedCardData[i].rate;
  }
  var rate = Math.round((rate_sum / flattenedCardData.length) * 10) / 10;

  return (
    <div className="cafe-page-container">
      <div className="navnav">
        <Navbar />
      </div>
      <div className="like-info-container" style={style}>
        <img src="../../../assets/like.png" width="550px" />
      </div>
      {Object.entries(cardData).map(([category, cards]) => (
        <div className={"subtitle"} key={category}>
          <h1 className="category-heading">{category}</h1>
          <div className="cards-grid">
            {cards.map((data, index) => (
              <Card
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

export default LikePage;
