import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import FavInfo from "../../components/fav_info/fav_info";
import "./fav_page.css";
import { Spacer } from "@chakra-ui/react";

export const FavPage = ({ BrandyData,  AntData }) => {
  const flattenedBrandyData = Object.values(BrandyData).flat();
  BrandyData = []
  for (var d of flattenedBrandyData) {
    if(d.fav){
      BrandyData.push(d)
    }
  }
  const flattenedAntData = Object.values(AntData).flat();
  AntData = []
  for (var d of flattenedAntData) {
    if(d.fav){
      AntData.push(d)
    }
  }

  return (
    <div className="cafe-page-container">
      <div>
        <Navbar />
      </div>
      <div className="empty"></div>
      <FavInfo imgSrc={"../../../assets/favorite.jpg"} cafe_name={"Favorite"} />
      <div className={"subtitle"}>
        <h1 className="category-heading">The Anteatery</h1>
        <div className="cards-grid">
          {AntData.map((data, index) => (
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
      <div className={"subtitle"}>
        <h1 className="category-heading">Brandywine</h1>
        <div className="cards-grid">
          {BrandyData.map((data, index) => (
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
    </div>
  );
};

export default FavPage;
