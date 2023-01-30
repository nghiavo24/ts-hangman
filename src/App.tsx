import { useState } from "react";
import words from './wordList.json';
import style from './App.css'

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