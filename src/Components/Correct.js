import React from "react";

const Correct = ({ isCorrect }) => {
  return (
    <div>
      <p>Total Correct: {isCorrect}</p>
    </div>
  );
};

export default Correct;
