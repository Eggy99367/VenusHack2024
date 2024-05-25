import React from "react";
import './card.css';
import { StarRating } from '../star_rating/star_rating'
import { HStack, Box } from '@chakra-ui/react';

export const Card = ({
    imgSrc,
    title,
    rate,
    comment_num,
    link
}) =>{
    return (
        <div className="card-container">
            <img src= {imgSrc}
            alt={"Card Image"}
            className="card-img"
            />
            <h1 className="card-title">{title}</h1>
            <HStack spacing="0px" marginLeft="6%" marginBottom="2%">
                <Box width="5%">
                    <p>{rate ?? '0'}</p>
                </Box>
                <Box width="62%">
                    {rate ? <StarRating value={rate} /> : <StarRating value={0} />}
                </Box>
                <Box width="26%">
                    <p>{comment_num ?? 0} reviews</p>
                </Box>
            </HStack>
            
            <a href={link} className="card-btn">
                More
            </a>
        </div>
    );
};

export default Card