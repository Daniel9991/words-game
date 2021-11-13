import { useState } from "react";

const WordInput = ({ currentWords, handleAddWord }) => {

	const [newWord, setNewWord] = useState('');

	const handleInputChange = ev => {
		setNewWord(ev.target.value);
	}

	const addNewWord = ev => {
		ev.preventDefault();

		if(newWord.trim() === '' || newWord.trim().includes(' ')){
			alert("You have to type in a single word");
		}
		else if(currentWords.includes(newWord.trim())){
			alert("That word is already in the game");
		}
		else{
			handleAddWord(newWord);
			setNewWord('');
		}
	}

	return <form onSubmit={ addNewWord }>
		<input type="text" placeholder="Input a word" onChange={handleInputChange} value={newWord} maxlength={30} />
		<input type="submit" value="Add word" />
	</form>
		
}

export default WordInput;