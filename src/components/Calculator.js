import React, { useState } from 'react';
import '../styles/global.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const inputNumber = (num) => {
    if (display === '0') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (nextOperation === '=') {
      if (operation && previousValue !== null) {
        const newValue = calculate(previousValue, inputValue, operation);
        setDisplay(String(newValue));
        setPreviousValue(newValue);
        setOperation(null);
      }
    } else {
      if (previousValue === null) {
        setPreviousValue(inputValue);
      } else if (operation) {
        const currentValue = previousValue || 0;
        const newValue = calculate(currentValue, inputValue, operation);

        setDisplay(String(newValue));
        setPreviousValue(newValue);
      }

      setOperation(nextOperation);
      setDisplay('0');
    }
  };

  const calculate = (firstValue, secondValue, operation) => {
    if (operation === '+') {
      return firstValue + secondValue;
    } else if (operation === '-') {
      return firstValue - secondValue;
    } else if (operation === '*') {
      return firstValue * secondValue;
    } else if (operation === '/') {
      return firstValue / secondValue;
    }
    return secondValue;
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => inputNumber(7)}>7</button>
        <button onClick={() => inputNumber(8)}>8</button>
        <button onClick={() => inputNumber(9)}>9</button>
        <button onClick={() => inputOperation('/')}>/</button>
        <button onClick={() => inputNumber(4)}>4</button>
        <button onClick={() => inputNumber(5)}>5</button>
        <button onClick={() => inputNumber(6)}>6</button>
        <button onClick={() => inputOperation('*')}>*</button>
        <button onClick={() => inputNumber(1)}>1</button>
        <button onClick={() => inputNumber(2)}>2</button>
        <button onClick={() => inputNumber(3)}>3</button>
        <button onClick={() => inputOperation('-')}>-</button>
        <button onClick={() => inputNumber(0)}>0</button>
        <button onClick={() => inputOperation('=')}>=</button>
        <button onClick={clear}>C</button>
        <button onClick={() => inputOperation('+')}>+</button>
      </div>
    </div>
  );
}

export default Calculator;
