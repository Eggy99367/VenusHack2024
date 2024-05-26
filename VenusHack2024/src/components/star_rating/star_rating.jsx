import React from "react";
import { FaStar } from "react-icons/fa";
import "./star_rating.css";

export const StarRating = ({value, onRatingChange}) => {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                var star_color = "#ffc107"
                if(ratingValue > Math.ceil(value)){
                    star_color = "#e4e5e9"
                }else if(ratingValue > value){
                    star_color = "#f8e9bb"
                }
                return (
                    
                    <FaStar
                        key={ratingValue}
                        className="star" 
                        color={star_color} 
                        size={30}
                        onClick={() => onRatingChange(ratingValue)}
                        />
                );
            })}
        </div>
    );
};

export default StarRating;
