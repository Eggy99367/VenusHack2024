import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star_rating.css";
import { HStack } from "@chakra-ui/react";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
        <HStack>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                <label key={i}>
                    <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                    className="star"
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>
                );
            })}
        </HStack>
    </div>
  );
};

export default StarRating;
