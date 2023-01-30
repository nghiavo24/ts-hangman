import { useState } from "react";
import words from './wordList.json';
import './App.css';
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import {Keyboard} from './Keyboard';

function App() {
  const[wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return(
    <div className="main-container">
      <div className="announcement">
        Lose
        Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App