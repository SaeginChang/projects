import useCalc from '../hooks/useCalc';
import {useState} from 'react';
import styled from "styled-components"

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: #7b94a6;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const MainText = styled.div`
    font-size: calc(2px + 1vw);
    align-self: center;
    width: 100%;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`

const MainTitle = styled.h3`
    margin: 2vw 0 0;
    text-align: center;
    font-size: calc(3px + 3vw);
    color: #620067;
`

const ProjectTitle = styled.h3`
    text-align: center;
    font-size: calc(1px + 2vw);
    margin: 5vh 2vw 0;
`

const CalculatorContainer = styled.section`
    background-color: #0f3a65;
    padding: 20px;
    border: 2px solid #6c5ce7;
    margin: 20px 0;
    width: 80%;
`;

const CalculatorInput = styled.input`
    width: 100px;
    padding: 10px;
    margin: 10px 5px;
    border: 1px solid #6c5ce7;
    font-size: 16px;
    text-align: center;
    outline: none;
`;

const CalculatorButton = styled.button`
    padding: 10px 15px;
    margin: 10px 5px;
    border: none;
    background-color: #6c5ce7;
    color: white;
    font-size: 16px;
    font-weight: bold;
    &:hover {
        background-color: #0984e3;
    }
`;

const Projects = () => {
    const { result, myAdd, subtract, multiply, divide, power, clearCalculator } = useCalc();
    const [num1, setNum1] = useState<number | string>("");
    const [num2, setNum2] = useState<number | string>("");

    return (
        <MainContent>
            <MainTitle>PROJECTS | Nick Chang Portfolio</MainTitle>

            <Main>
                <MainText>
                    <section>
                        <ProjectTitle>Messenger Chatting Application</ProjectTitle>
                        <p>Designed and developed a real-time messenger application using Python and C++.</p>
                        <p>Developed the backend and frontend, including database management, server infrastructure, and encryption protocols.</p>
                    </section>

                    <section>
                        <ProjectTitle>Music and Movie Linking with OAuth</ProjectTitle>
                        <p>Led a 4-person team to integrate user music preferences with movie choices using OAuth.</p>
                        <p>Worked on authentication with Firebase and Spotify APIs.</p>
                    </section>
                    <section>
                        <CalculatorContainer>
                            <h3>Calculator</h3>
                            <CalculatorInput type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value) || "")} placeholder="Enter First Number" />
                            <CalculatorInput type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value) || "")} placeholder="Enter Second Number" />
                            <CalculatorButton onClick={() => myAdd(Number(num1), Number(num2))}>+</CalculatorButton>
                            <CalculatorButton onClick={() => subtract(Number(num1), Number(num2))}>-</CalculatorButton>
                            <CalculatorButton onClick={() => multiply(Number(num1), Number(num2))}>*</CalculatorButton>
                            <CalculatorButton onClick={() => divide(Number(num1), Number(num2))}>/</CalculatorButton>
                            <CalculatorButton onClick={() => power(Number(num1), Number(num2))}>**</CalculatorButton>
                            <CalculatorButton onClick={clearCalculator}>Clear</CalculatorButton>
                            <h3>{result}</h3>
                        </CalculatorContainer>
                    </section>

                </MainText>
            </Main>
        </MainContent>
    );
};

export default Projects;