import {styled} from "styled-components";

const AboutContentDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: lightpink;
`

export default function AboutMe() {

    return(
        <AboutContentDiv>
            <h1>I am a CS391 Student</h1>
            <p>I love learning etc.</p>
        </AboutContentDiv>
    );
}