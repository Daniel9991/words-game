import { useState } from "react";
import HiddenWord from './components/HiddenWord';
import LetterBox from './components/LetterBox';
import './App.css';
//import WordInput from "./components/WordInput";


const App = () => {


  const baseWords = [
    {
      word: 'apple',
      hidden: true,
      description: 'Red fruit that hangs from trees'
    },
    {
      word: 'street',
      hidden: true,
      description: 'Pavimented road'
    },
    {
      word: 'explosion',
      hidden: true,
      description: 'Event caused by a bomb when it detonates'
    },
    {
      word: 'airport',
      hidden: true,
      description: 'Port for aircraft'
    },
    {
      word: 'fruit',
      hidden: true,
      description: 'Part of the plant that is usually sweet and consumed by animals'
    },
    {
      word: 'battle',
      hidden: true,
      description: 'Encounter between two or more armies'
    }
  ]


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

    setWords(words.map(w => {
      if(w.word === clickedWord){
        w.hidden = false;
        return w;
      }
      else{
        return w;
      }
    }));

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

/*
  const handleAddWord = word => {
    setWords(Object.assign({}, words, {[word]: true}));
  }
*/

  return <div class="container">
  <ul style={{
    width: 'fit-content',
    margin: '100px auto 50px'
  }}>
    { words.map((w, index) => <HiddenWord word={w.word} description={w.description} hidden={w.hidden} updateWordsState={wordClicked} key={index} />) }
  </ul>
  <ul style={{
    width: 'fit-content',
    margin: '0 auto'
  }}>
    { Object.keys(letters).sort().map((l, index) => <LetterBox letter={l} count={letters[l]} key={index} />) }
  </ul>
  </div>
}


export default App;