import React from "react";
import "./fav_info.css";

function FavInfo({ imgSrc, cafe_name}) {
    const style = {
      height: "350px",
      width: "90%",
      backgroundImage: `url(${imgSrc})`,
      backgroundPosition: "center",
      flexDirection: "column",
      justifyContent: "center",
      backgroundSize: "cover",
      alignItems: "center",
      margin: "auto",
      marginTop: "20px",
      display: "flex",
    };
    return (
      <div className="cafe-info-container" style={style}>
        <h1>{cafe_name}</h1>
      </div>
    );
  }
  
  export default FavInfo;