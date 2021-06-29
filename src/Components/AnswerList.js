import React from "react";
import Answer from "./Answer";

const AnswerList = ({ dataSet, handleClick }) => {
  const options = [];
  for (let i = 0; i < dataSet.options.length; i++) {
    options.push(
      <Answer
        choice={i}
        handleClick={handleClick}
        answer={dataSet.options[i]}
      />
    );
  }
  return <div>{options}</div>;
};

export default AnswerList;
