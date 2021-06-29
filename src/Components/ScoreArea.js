import React from "react";
import Correct from "./Correct";
import Incorrect from "./Incorrect";

const ScoreArea = ({ correct, incorrect }) => {
  return (
    <div>
      <h1>Score Area</h1>
      <Correct correct={correct} />
      <Incorrect incorrect={incorrect} />
    </div>
  );
};

export default ScoreArea;
