import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/trophy.webp";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const outputEndGame = () => {
    const score = quizState.score;
    if(score <= 3) {
      return 'Que pena! Você precisa aprender mais. Por que não tenta novamente?';
    } else  if(score > 7) {
      return 'Muito bem! Mas você ainda pode melhorar.';
    } else {
      return 'Parabéns. Você foi incrível!';
    }
  }

  return (
    <div id="gameover">
      <img src={WellDone} alt="Fim do Quiz" />
      <h2>{outputEndGame()}</h2>
      <p className={"pontuacao"}>{(quizState.score/quizState.questions.length)*100}% Score</p>
      <p className={"complete"}>Quiz finalizado! Sua conscientização é essencial na prevenção da dengue.</p>
      <p>
        Você respondeu <span className={"questoes"}>{quizState.questions.length} questões</span> e <span className={"respostas"}>{quizState.score} respostas</span> estão corretas.
      </p>
      
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>

      <p></p>
      <p></p>
      <p>Referencia graficas utilizadas </p>
        <a href="https://br.freepik.com/search" className="custom-link">Ícone de Smashicons</a>
        <a href="https://br.freepik.com/search" className="custom-link">Ícone de Eucalyp</a>
      
    
    </div>
  );
};

export default GameOver;