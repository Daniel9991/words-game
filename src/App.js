import { useState } from "react";
import HiddenWord from './components/HiddenWord';

const App = () => {
  const _words = [
    {word: 'apple', hidder: true},
    {word: 'street', hidder: true},
    {word: 'plane', hidden: true},
    {word: 'explosion', hidden: true},
    {word: 'airport', hidden: true},
    {word: 'fruit', hidden: true},
    {word: 'battle', hidden: true}
  ]
  const [words, setWords] = useState(_words);

  return <>
  <ul style={{
    width: 'fit-content',
    margin: '0 auto 50px'
  }}>
    { words.map(word => <HiddenWord word={word} />) }
  </ul>;
  <ul style={{
    width: 'fit-content',
    margin: '0 auto 50px'
  }}>
    
  </ul>
  </>
}

export default App;