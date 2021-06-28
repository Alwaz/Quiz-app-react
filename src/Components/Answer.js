import React from "react";
import dataSet from "../api/dataSet";

const Answer = ({ answer }) => {
  return (
    <div>
      {/* answer buttons */}
      <button>{answer}</button>
    </div>
  );
};

export default Answer;
