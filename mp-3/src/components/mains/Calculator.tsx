import styled from 'styled-components';
import { useState } from 'react';

const ProjectTitle = styled.h3`
    font-size: calc(2vh + 1vw);
    font-weight: bold;
    color: #003366;
    
    @media screen and (max-width: 900px) {
        font-size: calc(2vh + 2vw);
    }
`;

const CalcContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D8E2DC;
    padding: 2vh;
    border-radius: 10px;
    width: 100%;
    margin: 4vh auto;
    
    @media screen and (max-width: 900px) {
        max-width: 90%;
    }
`;

const Numbers = styled.label`
    font-size: calc(1vh + 1vw);
    font-weight: bold;
    color: #003366;
    margin: 1vh;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3vw);
    }
`;

const CalcInput = styled.input`
    width: 20vw;
    max-width: 250px;
    padding: 1vh;
    font-size: calc(1vh + 0.8vw);
    border: 2px solid #00246B;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 1vh;
    
    @media screen and (max-width: 900px) {
        width: 80%;
        font-size: calc(3vw);
    }
`;

const CalcButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2vh;
    
    @media screen and (max-width: 900px) {
        margin-right: 1vw;
    }
`;

const Buttons = styled.button`
    background-color: #003366;
    color: white;
    border: none;
    padding: 1vh 1.5vw;
    font-size: calc(1vh + 1vw);
    border-radius: 5px;
    margin-right: 1vw;
    
    &:hover {
        background-color: #809BCE;
    }
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 2vw);
        padding: 1vh 3vw;
        margin-bottom: 1vh;
    }
`;

const OutputStyle = styled.div`
    margin-top: 2vh;
    font-size: calc(1.2vh + 1vw);
    font-weight: bold;
    text-align: center;
    
    @media screen and (max-width: 900px) {
        font-size: calc(4vw);
    }
`;


export default function Calculator() {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const OutputMessage = styled.p`
        width: 20vw;
        height: 10vh;
        padding: 4vh;
        font-size: calc(1vh + 0.8vw);
        border: 2px solid #00246B;
        border-radius: 5px;
        text-align: center;
        background-color: white;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        // Use an if statement to change the color and visibility of the output
        ${error === "" ? "visibility: visible;" : "visibility: hidden;"};
        ${Number(output) < 0 ? "color: red;" : "color: black;"};
        
        @media screen and (max-width: 900px) {
            width: 100%;
            font-size: calc(3vw);
        }
    `;

    const ErrorMessage = styled.p`
        color: red;

        ${error !== "" ? "visibility: visible;" : "visibility: hidden;"};
    `;

    const calculate = (op : string) => {
        const num1 = Number(number1);
        const num2 = Number(number2);

        setError("");

        if (number1 === "" || number2 === "") {
            setError("Please fill the boxes.");
        } else if (isNaN(num1)) {
            setError("Input number 1 is not a number. Please enter a valid number.");
        } else if (isNaN(num2)) {
            setError("Input number 2 is not a number. Please enter a valid number.");
        }

        if (op === "+") {
            const sum = num1 + num2;
            setOutput(String(sum));
        } else if (op === "-") {
            const diff = num1 - num2;
            setOutput(String(diff));
        } else if (op === "*") {
            const prod = num1 * num2;
            setOutput(String(prod));
        } else if (op === "/") {
            if (num2 === 0) {
                setError("Number 2 is a zero, cannot divide by zero.");
                return;
            }

            const quot = num1 / num2;
            setOutput(String(quot));
        } else if (op === "**") {
            let pow = 1;

            if (num2 > 0) {
                for (let i = 0; i < num2; i++) {
                    pow = pow * num1;
                }
            } else if (num2 === 0) {
                pow = 1;
            } else {
                const positiveNum2 = num2 * -1;
                let tempNum = 1;

                for (let i = 0; i < positiveNum2; i++) {
                    tempNum = tempNum * num1;
                }
                pow = 1 / tempNum;
            }

            setOutput(String(pow));
        } else if (op === "clear") {
            setError("");
            setOutput("");
            setNumber1("");
            setNumber2("");
        }
    }

    return (
        <>
            <CalcContainer>
                <ProjectTitle>Calculator</ProjectTitle>
                <Numbers htmlFor="number1-input">
                    Number 1: <br />
                    {/* onChange found in lab 3. onChange sets the number once the value of the element is changed */}
                    <CalcInput id="number1-input" type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
                </Numbers>
                <Numbers htmlFor="number2-input">
                    Number 2: <br />
                    <CalcInput id="number2-input" type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
                </Numbers>

                <CalcButtons>
                    <Buttons onClick={() => calculate("+")}>+</Buttons>
                    <Buttons onClick={() => calculate("-")}>-</Buttons>
                    <Buttons onClick={() => calculate("*")}>*</Buttons>
                    <Buttons onClick={() => calculate("/")}>/</Buttons>
                    <Buttons onClick={() => calculate("**")}>**</Buttons>
                    <Buttons onClick={() => calculate("clear")}>Clear</Buttons>
                </CalcButtons>

                <OutputStyle><OutputMessage>{output}</OutputMessage></OutputStyle>

                <OutputStyle><ErrorMessage>{error}</ErrorMessage></OutputStyle>
            </CalcContainer>
        </>
    );
}