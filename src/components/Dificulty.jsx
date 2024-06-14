import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Category from "../img/quiz.svg";

import "./Dificulty.css";

const Dificulty = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="dificulty">
      <h2>Escolha uma dificuldade:</h2>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Category} alt="Dificuldade do Quiz" />
    </div>
  );
};

export default Dificulty;