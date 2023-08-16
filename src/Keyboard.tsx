import styles from "./Keyboard.module.css"
import {Key} from "react";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}
export const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) => {
    return (<div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem",
            }}>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button
                    disabled={isInactive || isActive}
                    onClick={() => addGuessedLetter(key)}
                    className={
                        `${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`
                    } key={key}
                >{key}</button>
            })}
        </div>
    )
}