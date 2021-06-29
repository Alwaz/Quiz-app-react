import React from "react";

const Answer = ({ answer, handleClick }) => {
  return (
    <div>
      {/* answer buttons */}
      <button onClick={(choice) => handleClick(choice)}>{answer}</button>
    </div>
  );
};

export default Answer;
