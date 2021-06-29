import React from "react";
import Questions from "./Questions";
import AnswerList from "./AnswerList";
import UserGreetings from "./UserGreetings";

const QuizArea = ({ isFinished, dataSet }) => {
  if (isFinished) {
    return <UserGreetings />;
  }

  return (
    <div>
      This is Quiz Area
      <Questions dataSet={dataSet} />
      <AnswerList dataSet={dataSet} />
    </div>
  );
};

export default QuizArea;
