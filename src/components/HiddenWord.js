import '../css/HiddenWord.css';

const HiddenWord = ({ word }) => {

	return <div className="hidden-word" onClick={(ev) => {
		ev.target.style.backgroundColor = 'black';
		word.hidden = false;
		}}>
		{ word.word }
	</div>;
}

export default HiddenWord;