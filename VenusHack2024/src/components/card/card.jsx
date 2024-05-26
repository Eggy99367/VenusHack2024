import React, { useState } from "react";
import { createPortal } from "react-dom";
import { StarRating } from "../star_rating/star_rating";
import { HStack, Box, Spacer, IconButton } from "@chakra-ui/react";
import { RatingPopout } from "../rating_popout/rating_popout";
import { CiHeart } from "react-icons/ci";
import styled from "@emotion/styled";
import "./card.css";

export const Card = ({ imgSrc, title, rate, comment_num }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  const LargeIcon = styled(CiHeart)`
    width: 24px; // Adjust the width as needed
    height: 24px; // Adjust the height as needed
  `;

  return (
    <div justifyContent="center">
      <div className="card-container">
        <img src={imgSrc} alt="Card Image" className="card-img" />
      </div>
      <div className="card-body">
        <HStack marginBottom={"3px"} justifyContent="space-between">
          <div>
            <h1 className="card-title">{title}</h1>
          </div>
          <IconButton
            marginTop="8px"
            marginRight="9px"
            variant="unstyled"
            borderColor="white"
            icon={<LargeIcon />}
            justifyContent={"center"}
            alignSelf={"end"}
            width="20%"
            height="40px"
            backgroundColor="white"
            color="black"
            zIndex="100"
          />
        </HStack>
        <HStack
          spacing="0px"
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"10px"}
        >
          <Box width="10%">
            <p>{rate ?? "0"}</p>
          </Box>
          <Box width="55%">
            <StarRating value={rate ?? 0} />
          </Box>
          <Box width="26%">
            <p>({comment_num ?? 0})</p>
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
              {/* <img src={imgSrc} alt="Card Image" className="card-img2" /> */}
            </RatingPopout>
          )}
        </HStack>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Card;
