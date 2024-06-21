/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Home from "./components/Home";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import Dificulty from "./components/Dificulty"

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Home />}
      {quizState.gameStage === "Category" && <Dificulty />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}



export default App;