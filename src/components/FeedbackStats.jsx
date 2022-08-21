import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  //calculating the average rating, 0 is the default value for the total argument
  let average =
    feedback.reduce((total, current) => {
      return total + current.rating;
    }, 0) / feedback.length;

  // Fixing the decimal to 1 number after the comma
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
