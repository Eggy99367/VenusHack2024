import React, { useState } from "react";
import { createPortal } from "react-dom";
import { StarRating } from "../star_rating/star_rating";
import { HStack, Box } from "@chakra-ui/react";
import { RatingPopout } from "../rating_popout/rating_popout";
import "./card.css";

export const Card = ({ imgSrc, title, rate, comment_num }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="card-container">
      <img src={imgSrc} alt="Card Image" className="card-img" />
      <h1 className="card-title">{title}</h1>
      <HStack spacing="0px" marginLeft="6%" marginBottom="2%">
        <Box width="5%">
          <p>{rate ?? "0"}</p>
        </Box>
        <Box width="62%">
          <StarRating value={rate ?? 0} />
        </Box>
        <Box width="26%">
          <p>{comment_num ?? 0} reviews</p>
        </Box>
      </HStack>

      <HStack>
        <button
          className="card-btn"
          onClick={() => {
            setModalOpen(true);
            console.log(modalOpen);
          }}
        >
          Rate
        </button>
        {modalOpen && (
          <RatingPopout
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
            imgSrc={imgSrc}
          >
            <h1 className="popout_title">Rate {title}</h1>
          </RatingPopout>
        )}
      </HStack>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Card;
