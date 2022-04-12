import React, {useState} from 'react';
import CryptexContainer from './cryptexContainer';
const Wrapper = ({}) => {
    const [guessLetters, setGuessLetters] = useState(['A', 'A', 'A', 'A', 'A']);

    return(
        <CryptexContainer 
            guessLetters={guessLetters}
            setGuessLetters={setGuessLetters}
        />
        
    )
}
export default Wrapper