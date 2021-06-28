import React, { useState } from "react";
import Questions from "./Questions";
import AnswerList from "./AnswerList";
import UserGreetings from "./UserGreetings";
import dataSet from "../api/dataSet";

const QuizArea = ({ dataSet }) => {
  const [isFinished, setIsFinished] = useState(false);

  if (isFinished) {
    setIsFinished(true);
    return <UserGreetings />;
  }

  return (
    <div>
      This is Quiz Area
      {/* <Questions dataSet={dataSet} /> */}
      {/* <AnswerList dataSet={dataSet} /> */}
    </div>
  );
};

export default QuizArea;
