import words from "./wordList.json"
import {useState} from "react";
import {Keyboard} from "./Keyboard.tsx";
import {HangmanWord} from "./HangmanWord.tsx";
import {HangmanDrawing} from "./HangmanDrawing.tsx";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    const [guessedLetters, setguessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    console.log(wordToGuess);
    return (<div style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center"
        }}>
            <div style={{fontSize: "2rem", textAlign: "center"}}>Lose Win</div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
            <div style={{alignSelf: "stretch"}}>
                <Keyboard/>
            </div>
        </div>
    )
}

export default App
