import React from "react";
import './Card.css';


export const Card = ({
    imgSrc,
    title,
    rate,
    link
}) =>{
    return (
        <div className="card-container">
            <img src= {imgSrc}
            alt={"Card Image"}
            className="card-img"
            />
            <h1 className="card-title">{title}</h1>
            <p className="card-rate">
                {rate}
            </p>
            <a href={link} className="card-btn">
                More
            </a>
        </div>
    );
};