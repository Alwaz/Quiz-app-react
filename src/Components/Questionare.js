import React, { useState } from "react";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";
import dataSet from "../api/dataSet";

const Questionare = () => {
  // define states
  const [current, setCurrent] = useState(1);
  const [dataSet, setDataSet] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  console.log(dataSet[current]);

  return (
    <div>
      This is Questionare
      <QuizArea isFinished dataSet={dataSet[current]} />
      <ScoreArea />
    </div>
  );
};

export default Questionare;
