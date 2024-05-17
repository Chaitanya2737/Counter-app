import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleEvaluate = () => {
        try {
            const evaluatedResult = eval(input); // Note: eval can be dangerous if not used carefully
            setResult(evaluatedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly id="display" />
            <div className="buttons">
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('+')}>/</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={handleEvaluate}>=</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>
            <div className="result">{result}</div>
        </div>
    );
};

export default App;
