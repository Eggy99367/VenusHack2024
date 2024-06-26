import React from "react";
import { StarRating } from "../star_rating/star_rating";
import "./cafe_info.css";

function CafeInfo({ imgSrc, cafe_name, overall_rating }) {
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

      <div className="rating-container">
        <div style={{ width: "5%" }}>
          <p>{overall_rating ?? "0"}</p>
        </div>
        <div
          style={{
            width: "150px",
            justifyContent: "center"
          }}
        >
          {overall_rating ? (
            <StarRating value={overall_rating} />
          ) : (
            <StarRating value={0} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CafeInfo;

