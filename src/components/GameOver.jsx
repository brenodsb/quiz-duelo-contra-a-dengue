import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/trophy.webp";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <img src={WellDone} alt="Fim do Quiz" />
      <h2>Parabéns {'{nome}'}!</h2>
      <p className={"pontuacao"}>{(quizState.score/quizState.questions.length)*100}% Score</p>
      <p className={"complete"}>Quiz finalizado! Sua conscientização é essencial na prevenção da dengue.</p>
      <p>
        Você respondeu <span className={"questoes"}>{quizState.questions.length} questões</span> e <span className={"respostas"}>{quizState.score} respostas</span> estão corretas.
      </p>
      
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;