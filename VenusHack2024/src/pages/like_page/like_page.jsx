import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import FavInfo from "../../components/fav_info/fav_info";
import "./like_page.css";

export const LikePage = ({ BrandyData,  AntData }) => {
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
      <div className="navnav">
        <Navbar />
      </div>
      {/* <div className="like-info-container" style={style}>
        <img src="../../../assets/like.png" width="550px" />
      </div> */}
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

export default LikePage;
