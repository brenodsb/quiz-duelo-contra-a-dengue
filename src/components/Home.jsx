/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';
import './Home.css';


const Home = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="home">
        <h2>DUELO CONTRA A DENGUE</h2>
        <img src={Quiz} alt="DUELO CONTRA A DENGUE" />
        <p>Seja bem-vindo!</p>
        <p className={"text"}>Digite seu nome e clique no botão</p>
        <input  placeholder="Seu nome"></input >
        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          Start
        </button>
        
    </div>
  )
}

export default Home