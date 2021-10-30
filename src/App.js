import { useState } from "react";
import HiddenWord from './components/HiddenWord';
import LetterBox from './components/LetterBox';

const App = () => {
  const baseWords = [
    {word: 'apple', hidder: true},
    {word: 'street', hidder: true},
    {word: 'plane', hidden: true},
    {word: 'explosion', hidden: true},
    {word: 'airport', hidden: true},
    {word: 'fruit', hidden: true},
    {word: 'battle', hidden: true}
  ]
  const [words, setWords] = useState(baseWords);

  return <>
  <ul style={{
    width: 'fit-content',
    margin: '0 auto 50px'
  }}>
    { words.map(w => <HiddenWord word={w.word} hidden={w.hidden} />) }
  </ul>;
  <ul style={{
    width: 'fit-content',
    margin: '0 auto 50px'
  }}>
    <LetterBox letter="A" count={1} />
    <LetterBox letter="S" count={5} />
    <LetterBox letter="E" count={8} />
  </ul>
  </>
}

export default App;