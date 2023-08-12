import React, { useState } from "react";
import "./calculator.css";



const Calculator = () => {
    let [numOne, setNumOne] = useState("");
    let [numTwo, setNumTwo] = useState("");
    let [ans, setAns] = useState("");
    let [error, setError] = useState("");

    //validation logic 
    const validationInput = () => {
        if (numOne === '') {
            setError("Num1 cannot be empty")
            return;
        }
        if (numTwo === '') {
            setError('Num2 cannot be empty');
            return;
        }
        if (!/^-?\d*\.?\d+$/.test(numOne) || !/^-?\d*\.?\d+$/.test(numTwo)) {
            setError('Please enter valid numbers');
            return;
        }

        setError('');
        return true;
    };


    function handleOperation(operator) {
        if (!validationInput()) {
            return;
        }
        const number1 = parseInt(numOne);
        const number2 = parseInt(numTwo);
        switch (operator) {
            case "+":
                setAns(number1 + number2);
                break;
            case "-":
                setAns(number1 - number2);
                break;
            case "*":
                setAns(number1 * number2);
                break;
            case "/":
                setAns(number1 / number2);
                break;
            default:
        }
    }
    return (
        <div className="container">
            <div>
            <h1>React Calculator</h1>
            <div className="input">
                <input type="text" placeholder="Num 1" onChange={(e) => setNumOne(e.target.value)} value={numOne} />
                <input type="text" placeholder="Num 2" onChange={(e) => setNumTwo(e.target.value)} value={numTwo} />
            </div>
            <div className="btn">
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
            </div>
            {ans !== "" &&
            <div className="success">
                <p className="success-msg">Success!</p>
                <p className="result">Result - <span className="resultStyle">{ans}</span></p>
                </div>}
            {error 
            &&
            <div className="error">
            <p className="red-error">Error!</p>
            <p>{error}</p>
            </div>}
            {/* {ans !== '' && (
                <p className="success">
                    Success
                </p>
            )} */}
            </div>
        </div>
    )
}

export default Calculator;