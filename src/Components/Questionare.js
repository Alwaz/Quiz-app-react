import React, { useState } from "react";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";
import dataSet from "../api/dataSet";

const Questionare = () => {
  // define states
  const [current, setCurrent] = useState(0);
  const [dataSet, setDataSet] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div>
      This is Questionare
      <QuizArea />
      <ScoreArea />
    </div>
  );
};

export default Questionare;
