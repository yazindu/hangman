import words from "./wordList.json"
import {useEffect, useState} from "react";
import {Keyboard} from "./Keyboard.tsx";
import {HangmanWord} from "./HangmanWord.tsx";
import {HangmanDrawing} from "./HangmanDrawing.tsx";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    console.log(wordToGuess);

    function addGuessedLetter(letter : string) {
        if(guessedLetters.includes(letter)) return
        setGuessedLetters()
    }

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if(!key.match(/^[a-z]$/)) return
            e.preventDefault();
            addGuessedLetter(key);
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])

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
