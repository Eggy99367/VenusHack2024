import React, { useState } from "react";
import "./rating_popout.css";
import StarRating from "../star_rating/star_rating";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export const RatingPopout = ({ onSubmit, onCancel, closeModal, children, imgSrc }) => {
  const [rating, setRating] = useState(0); // Initialize rating state
  const [value, setValue] = useState(""); // Initialize value state

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (rating, comment) => {
    console.log(rating);
    console.log(comment);
    onSubmit("");
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal("");
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => closeModal("")}>
            &times;
          </p>
        </div>
        <img src={imgSrc} alt="Card Image" className="card-img2" />
        <div className="modal-content">{children}</div>
        <div className="star">
          <StarRating value={rating} onRatingChange={setRating} />
          <FormControl>
            <FormLabel>Comment</FormLabel>
            <Input
              className="input"
              onChange={handleChange}
              value={value}
              placeholder="Say something..."
            />
          </FormControl>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => handleSubmit(rating, value)}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => onCancel("")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
