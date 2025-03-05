import styled from "styled-components"

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: #7b94a6;

    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
`;

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
`

const MainText = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(1px + 1vw);
`

const MainImage = styled.img`
    width: 50%;
    height: auto;
    object-fit: contain;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px) {
        width: 80%;
        max-width: 250px;
        margin: 1vh auto;
        height: auto;
    }
`

const MainTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(3px + 3vw);
    color: #620067;
`

const Education = () => {
    return (
        <MainContent>
            <MainTitle>EDUCATION | Nick Chang Portfolio</MainTitle>

            <Main>
                <MainImage
                    id="bu-image"
                    src="/Boston-University-Logo.jpg"
                    alt="Boston University Logo"
                    width={"100"}
                    height={"200"}
                />
                <MainText>
                    <p><strong>Boston University</strong>, Boston, MA (Expected May 2025)</p>
                    <br />
                    <p><strong>Bachelor of Science</strong>, Major: Computer Science, Minor: Business</p>
                    <br />
                    <p><strong>Relevant Coursework:</strong></p>
                    <ul>
                        <li>Combinatoric Structures</li>
                        <li>Geometric Algorithms</li>
                        <li>Computer Systems</li>
                        <li>Software Engineering</li>
                        <li>Distributed Systems</li>
                        <li>Probability in Computing</li>
                        <li>Machine Learning</li>
                        <li>Full-Stack Development</li>
                        <li>Artificial Intelligence</li>
                    </ul>
                </MainText>
            </Main>
        </MainContent>
    )
}

export default Education;