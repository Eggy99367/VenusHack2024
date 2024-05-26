import React from "react";
import "./rating_popout.css";
import StarRating from "../user_rate/star_rating";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export const RatingPopout = ({
  onSubmit,
  onCancel,
  closeModal,
  children,
  imgSrc,
}) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <div
      className="rating-popout-modal-container"
      onClick={(e) => {
        if (e.target.className === "rating-popout-modal-container")
          closeModal("");
      }}
    >
      <div className="rating-popout-modal">
        <div className="rating-popout-modal-header">
          <p className="rating-popout-close" onClick={() => closeModal("")}>
            &times;
          </p>
        </div>
        <div className="rating-popout-modal-content">
          <div className="rating-popout-image-container">
            <img src={imgSrc} alt="Popout" className="rating-popout-image" />
          </div>
          {children}
        </div>
        <div className="rating-popout-star">
          <StarRating />
          <FormControl>
            <FormLabel>Comment</FormLabel>
            <Input
              className="rating-popout-input"
              onChange={handleChange}
              value={value}
              placeholder="Say something..."
            />
          </FormControl>
        </div>
        <div className="rating-popout-modal-footer">
          <button
            type="submit"
            className="rating-popout-btn-submit"
            onClick={() => onSubmit("")}
          >
            Submit
          </button>
          <button
            type="button"
            className="rating-popout-btn-cancel"
            onClick={() => onCancel("")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPopout;
