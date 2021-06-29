import React, { useState, useEffect } from "react";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";
import dataSet from "../api/dataSet";

const Questionare = () => {
  // define states
  const [current, setCurrent] = useState(0);
  let { question, options } = dataSet;
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div>
      This is Questionare
      {console.log(dataSet)}
      <QuizArea isFinished={isFinished} dataSet={dataSet[current]} />
      <ScoreArea correct={correct} incorrect={incorrect} />
    </div>
  );
};

export default Questionare;
