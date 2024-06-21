/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/file.png';
import './Home.css';


const Home = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [nome, setNome] = useState('');

  const handleChangeNome = (event) => {
    const newName = event.target.value;
    setNome(newName);
    localStorage.setItem('nome', newName); // Salva o nome no localStorage
  }

  return (
    <div id="home">
        <h2>DUELO CONTRA A DENGUE</h2>
        <img src={Quiz} alt="DUELO CONTRA A DENGUE" />
        <p className='bv'>Seja bem-vindo!</p>
        <p className={"text"}>Digite seu nome e clique no botão</p>
        <input  type="text" value={nome} onChange={handleChangeNome} placeholder="Seu nome"></input >
        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          Start
        </button>
        
    </div>
  )
}

export default Home
