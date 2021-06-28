import React from "react";
import Answer from "./Answer";

const AnswerList = ({ dataSet }) => {
  const options = [];
  for (let i = 0; i < dataSet.options.length; i++) {
    dataSet.options.push(<Answer choice={i} answer={dataSet.options[i]} />);
  }
  return <div>{dataSet.options}</div>;
};

export default AnswerList;
