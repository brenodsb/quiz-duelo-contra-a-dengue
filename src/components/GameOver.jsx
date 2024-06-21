import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/trophy.webp";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const nome = localStorage.getItem('nome');


  const outputEndGame = () => {
    const score = quizState.score;
    if(score <= 3) {
      return <p>Que pena, {nome}! Você precisa aprender mais. Por que não tenta novamente?</p>
    } else  if(score > 3 && score <= 7) {
      return <p>Muito bem, {nome}! Mas você ainda pode melhorar.</p>
    } else if(score > 7) {
      return <p>Parabéns, {nome}! Você foi incrível!</p>;
    }
  }



  return (
    <div id="gameover">
      <img src={WellDone} alt="Fim do Quiz" />
      <p>{outputEndGame()}</p>
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