import React, { useState, useEffect } from 'react';
const Scroller = ({index, setGuessLettersState, guessLetters, randomLetters}) => {

    const [currentIndex, setIndex] = useState(0)
    const [current, setCurrent] = useState(guessLetters[index])

    useEffect(() => {
        setSomeLetters()
    }, [currentIndex])
    
    const setSomeLetters = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const currentCharacter = () => { return alphabet.charAt(currentIndex)}
        let newLetters = [...guessLetters]
        newLetters[index] = currentCharacter();
        setGuessLettersState(newLetters)
        setCurrent(newLetters[index])
        let guess = randomLetters && randomLetters[index] === newLetters[index]
        guess ? new Audio('ding.mp3').play() : new Audio('cracking.mp3').play();
    }

    const nextLetter = (direction) => {
        if (direction === 'up' && currentIndex < 25) {
            setIndex(currentIndex + 1)
        } else if (
            direction === 'up' && currentIndex === 25) {
            setIndex(0)
        } else if (
            direction === 'down' && currentIndex > 0) {
            setIndex(currentIndex - 1)
        } else {
            setIndex(25)
        }
        
    }
    return (
        <div className='scroller-wrapper'>
            <div onClick={() => nextLetter('up')} className='scroll-up'>
                ▲
            </div>
            <div className='scroller' >
                {current}
            </div>
            <div onClick={() => nextLetter('down')} className='scroll-down' >
                ▼
            </div>
        </div>
    )
}
export default Scroller