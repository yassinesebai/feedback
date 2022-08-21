import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is the feedback item number 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is the feedback item number 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This is the feedback item number 3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const Delete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const Add = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const getEditedFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const Edit = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        Delete,
        Add,
        getEditedFeedback,
        Edit,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
