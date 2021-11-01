import '../css/HiddenWord.css';

const HiddenWord = ({ word, hidden, updateWordsState }) => {

	const wordClicked = ev => {
		updateWordsState(word);
	};

	return <div className="hidden-word"
				onClick={ hidden ? wordClicked : null }
				style={{backgroundColor: hidden ? '#adbdf0' : 'black'}}>
		{ word }
	</div>;
}

export default HiddenWord;