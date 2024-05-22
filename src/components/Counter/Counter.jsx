import { useState } from 'react';
import './Counter.css';

const Counter = ({initialState,howMuchMore, howMuchLess}) => {
	const [counter, setCounter] = useState(initialState);
    const increment = () => {
        setCounter(counter + howMuchMore);
    };
    const decrement = () => {
        setCounter( counter - howMuchLess);
    };
	return (
		<div id='counterDiv'>
			<button id='decrementBtn' onClick={decrement}>-{howMuchLess}</button>
			<h1>{counter}</h1>
			<button id='incrementBtn' onClick={increment}>+{howMuchMore}</button>
		</div>
	);
};

export default Counter;
