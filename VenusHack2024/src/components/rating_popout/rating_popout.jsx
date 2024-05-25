import React from "react";
import "./rating_popout.css";
import StarRating from "../user_rate/star_rating";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export const RatingPopout = ({ onSubmit, onCancel, closeModal, children }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => closeModal("")}>
            &times;
          </p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="star">
          <StarRating />
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
            onClick={() => onSubmit("")}
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
