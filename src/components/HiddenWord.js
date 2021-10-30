import '../css/HiddenWord.css';

const HiddenWord = ({ word, hidden }) => {

	return <div className="hidden-word" onClick={(ev) => {
		ev.target.style.backgroundColor = 'black';
		hidden = false;
		}}>
		{ word }
	</div>;
}

export default HiddenWord;