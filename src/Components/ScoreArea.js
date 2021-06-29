import React from "react";
import Correct from "./Correct";
import Incorrect from "./Incorrect";

const ScoreArea = ({ isCorrect, incorrect }) => {
  return (
    <div>
      <h1>Score Area</h1>
      <Correct isCorrect={isCorrect} />
      <Incorrect incorrect={incorrect} />
    </div>
  );
};

export default ScoreArea;
