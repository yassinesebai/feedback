import Card from "./shared/Card";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { Add, feedbackEdit, Edit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const HandleText = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Review must be at least 10 characters long !");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const getSelectedRating = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating: rating,
        text: text,
      };

      if (feedbackEdit.edit === true) {
        Edit(feedbackEdit.item.id, newFeedback);
      } else {
        newFeedback.id = uuidv4();
        Add(newFeedback);
      }
      setText("");
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service ?</h2>
        <RatingSelect getRatingFunction={getSelectedRating} />
        <div className="input-group">
          <input
            onChange={HandleText}
            type="text"
            placeholder="Write your review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
