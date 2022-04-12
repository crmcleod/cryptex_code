import React, { useState, useEffect } from 'react';
import Scroller from './scroller';
const CryptexContainer = ({ guessLetters, setGuessLetters }) => {

    const [randomLetters, setRandomLetters] = useState()
    const [correctGuess, setCorrectGuess] = useState(guessLetters.join('') === randomLetters)

    useEffect(() => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let newWord = ''
        for (let i = 0; i < 5; i++) {
            newWord += alphabet.charAt(Math.random() * alphabet.length)
        }
        setRandomLetters(newWord)
    }, [])

    useEffect(() => {
        setCorrectGuess(guessLetters.join('') === randomLetters)
    }, [guessLetters])


    const handleOpenClick = () => {
        if (correctGuess) {
            const cryptexInternal = document.querySelector('#cryptex-internal')
            const crypteBody = document.querySelector('#cryptex-body')
            cryptexInternal.style.transform = 'translate(10rem)'
            crypteBody.style.transform = 'translate(-30rem)'
            new Audio('Hello.mp3').play();
        } else {
            new Audio('cracking.mp3').play();
        }
    }
    return (<>
        <div onClick={handleOpenClick} id='cryptex-internal'>
            <div id='internal-lid'>

            </div>
            <h1>
                HELLO WORLD!
            </h1>
        </div>
        <div id='cryptex-body'>
            <span id='scroll-container'>
                {[0, 1, 2, 3, 4].map((current) => {
                    return (
                        <Scroller
                            key={current}
                            index={current}
                            setGuessLettersState={setGuessLetters}
                            guessLetters={guessLetters}
                            randomLetters={randomLetters}
                        />
                    )
                })}
            </span>
        </div>
    </>
    )
}
export default CryptexContainer