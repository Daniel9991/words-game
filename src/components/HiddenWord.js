import '../css/HiddenWord.css';
import ReactTooltip from 'react-tooltip';

const HiddenWord = ({ word, description, hidden, updateWordsState }) => {

	const wordClicked = ev => {
		updateWordsState(word);
	};

	const tooltip = <ReactTooltip id={`${word}-description`} place="top" effect="solid" className="tooltip">
	{ description }
	</ReactTooltip>;

	return <>
	<div
	className={`hidden-word${ hidden ? " clickable" : "" }`} 
	onClick={ hidden ? wordClicked : null }
	style={{color: hidden ? '#3e3c3e' : 'white'}}
	data-tip
	data-for={`${word}-description`}>
		{ word }
	</div>
	
	{ hidden ? tooltip : null}
	</>;
}

export default HiddenWord;