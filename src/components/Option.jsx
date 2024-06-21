/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <span>{option}</span>
    </div>
  );
};

export default Option;