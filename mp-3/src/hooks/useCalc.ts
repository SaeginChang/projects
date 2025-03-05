import {useState} from 'react';

const useCalc = () => {
    const [result, setResult] = useState<string | number>("");

    const displayResult = (value: string | number) => {
        setResult(value);
    }

    const myAdd = (num1: number, num2: number) => displayResult(num1+num2);
    const subtract = (num1: number, num2: number) => displayResult(num1-num2);
    const multiply = (num1: number, num2: number) => displayResult(num1*num2);
    const divide = (num1: number, num2: number) => {
        if (num2===0) displayResult("Can't divide by zero");
        else displayResult(num1/num2);
    }
    const power = (num1: number, num2: number) => {
        let result = 1;
        const isNegative = num2 < 0;
        const exponent = Math.abs(num2);

        for (let i = 0; i < exponent; i++) {
            result *= num1;
        }

        if (isNegative) {
            result = 1/result;
        }

        displayResult(result);
    }

    const clearCalculator = () => displayResult("");

    return { result, myAdd, subtract, multiply, divide, power, clearCalculator };
}

export default useCalc;