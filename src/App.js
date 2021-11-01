import { useState } from "react";
import HiddenWord from './components/HiddenWord';
import LetterBox from './components/LetterBox';


const App = () => {


  const baseWords = {
    //{word: hidden}
    apple: true,
    street: true,
    plane: true,
    explosion: true,
    airport: true,
    fruit: true,
    battle: true
  }


  const [words, setWords] = useState(baseWords);
  const [letters, setLetters] = useState({});


  const letterCountInWord = word => {

    const wordLetters = {};

    for(let l of word){
      l in wordLetters ? wordLetters[l]++ : wordLetters[l] = 1;
    }

    return wordLetters;
  }


  const wordClicked = clickedWord => {

    setWords(Object.assign({}, words, {[clickedWord]: false}));

    const wordLetters = letterCountInWord(clickedWord);

    //Adding the current amount of letters to the letters in word
    for(let l of Object.keys(wordLetters)){
      if(l in letters){
        wordLetters[l] += letters[l];
      }
    }

    //Adding the letter count with new letters amount from the word plus
    //the current count of letters that were not in the word
    setLetters(Object.assign({}, letters, wordLetters))
  }


  return <>
  <ul style={{
    width: 'fit-content',
    margin: '0 auto 50px'
  }}>
    { Object.keys(words).map((w, index) => <HiddenWord word={w} hidden={words[w]} updateWordsState={wordClicked} key={index} />) }
  </ul>;
  <ul style={{
    width: 'fit-content',
    margin: '0 auto 50px'
  }}>
    { Object.keys(letters).sort().map((l, index) => <LetterBox letter={l} count={letters[l]} key={index} />) }
  </ul>
  </>
}


export default App;