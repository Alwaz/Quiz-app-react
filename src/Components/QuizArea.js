import React from "react";
import Questions from "./Questions";
import AnswerList from "./AnswerList";
import UserGreetings from "./UserGreetings";

const QuizArea = () => {
  return (
    <div>
      This is Quiz Area
      <Questions />
      <AnswerList />
      <UserGreetings />
    </div>
  );
};

export default QuizArea;
