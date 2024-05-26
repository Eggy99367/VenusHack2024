import React, { useState } from "react";
import "./rating_popout.css";
import StarRating from "../star_rating/star_rating";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function httpPut(id, url, data) {
  fetch(url + `/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      // console.log(data);
      return data
  })
  .catch(error => {
      console.error('POST request failed:', error);
  });
}


export const RatingPopout = ({ comment_num, rate, onSubmit, onCancel, closeModal, children, imgSrc, id, food_data}) => {
  const [rating, setRating] = useState(0); // Initialize rating state
  const [value, setValue] = useState(""); // Initialize value state

  const handleChange = (event) => setValue(event.target.value);

  async function handleSubmit(id, rating, comment, orig_rate, orig_comment_num){
    console.log(rating);
    console.log(comment);
    console.log(orig_rate, orig_comment_num)
    orig_rate = Number(orig_rate)
    orig_comment_num = Number(orig_comment_num)
    // const data = {rate: ((orig_rate * 100) + (rating * 100)) / (orig_comment_num + 1), reviews: (orig_comment_num + 1)}
    const data = {rate: ((rating * 100) + ((orig_rate * 100) * orig_comment_num)) / (orig_comment_num + 1), reviews: (orig_comment_num + 1)}
    console.log(data)
    httpPut(id, "http://localhost/db/foods", data);
    await sleep(500);
    window.location.reload();
    onSubmit("");
  };

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
        <img src={imgSrc} alt="Card Image" className="card-img2" />
        <div className="modal-content">{children}</div>
        <div className="star">
          <StarRating value={rating} onRatingChange={setRating} />
          <FormControl className="form-control">
            <FormLabel className="form-label">Comment</FormLabel>
            <Input
              className="input rating-popout-input"
              onChange={handleChange}
              value={value}
              placeholder="Say something..."
            />
          </FormControl>
        </div>
        <div className="rating-popout-modal-footer">
          <button
            type="submit"
            className="btn btn-submit rating-popout-btn-submit"
            onClick={() => handleSubmit(id, rating, value, rate, comment_num)}
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
