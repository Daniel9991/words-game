import '../css/HiddenWord.css';

const HiddenWord = ({ word, hidden, updateWordsState }) => {

	const wordClicked = ev => {
		updateWordsState(word);
	};

	return <div className="hidden-word"
				onClick={ hidden ? wordClicked : null }
				style={{color: hidden ? '#3e3c3e' : 'white'}}>
		{ word }
	</div>;
}

export default HiddenWord;