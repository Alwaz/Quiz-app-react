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

  //   functions to increment score when choosing correct answer
  const handleClick = (choice) => {
    if (choice == dataSet[current].correct) {
      return setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);

      //   if current state== length of dataSet then update the state of isFinished to true else curent+1
      if (current == dataSet.length - 1) {
        setIsFinished(true);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  return (
    <div>
      This is Questionare
      {console.log(dataSet)}
      <QuizArea
        handleClick={handleClick}
        isFinished={isFinished}
        dataSet={dataSet[current]}
      />
      <ScoreArea correct={correct} incorrect={incorrect} />
    </div>
  );
};

export default Questionare;
