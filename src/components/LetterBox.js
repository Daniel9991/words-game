import '../css/LetterBox.css';

const LetterBox = ({letter, count}) => {
	return <li className='letter-box'>
		<h3>{ letter }</h3>
		<p>{ count }</p>
	</li>
}

export default LetterBox;