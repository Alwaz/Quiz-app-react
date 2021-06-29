import React, { useState } from "react";
import Questions from "./Questions";
import AnswerList from "./AnswerList";
import UserGreetings from "./UserGreetings";

const QuizArea = ({ isFinished, dataSet }) => {
  //   const [isFinished, setIsFinished] = useState(false);
  //   const [current, setCurrent] = useState(0);

  if (isFinished) {
    return <UserGreetings />;
  }

  return (
    <div>
      This is Quiz Area
      {/* {console.log(dataSet)} */}
      <Questions dataSet={dataSet} />
      {/* <AnswerList dataSet={props.dataSet} /> */}
    </div>
  );
};

export default QuizArea;
