import React from "react";
import Correct from "./Correct";
import Incorrect from "./Incorrect";

const ScoreArea = () => {
  return (
    <div>
      <h1>Score Area</h1>
      <Correct />
      <Incorrect />
    </div>
  );
};

export default ScoreArea;
