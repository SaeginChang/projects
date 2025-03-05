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

const MainTitle = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(3px + 3vw);
    color: #620067;
`

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`

const MainImage = styled.img`
    max-width: 500px;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px) {
        width: 80%;
        max-width: 250px;
        margin: 1vh auto;
    }
`

const MainText = styled.div`
    align-self: center;
    width: 50%;
    margin: 1vh 1vw;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
    
`

const Section = styled.section`
    margin: 20px 0;
`;

const Credits= () => {
    return (
        <MainContent>
            <MainTitle>CREDITS | Nick Chang Portfolio</MainTitle>

            <Main>
                <MainImage
                        id={"comp-image"}
                        src={"/computer.png"}
                        alt={"computer"}
                        width={"300"}
                        height={"300"}
                />

                <MainText>
                    <Section>
                        <p>
                            This website was designed and developed by <strong>Nicholas Chang</strong> as part of an online resume project.
                            It showcases my education, work experience, skills, and projects in an interactive format.
                        </p>
                    </Section>

                        <br />

                    <Section>
                        <h3>Technologies Used</h3>
                        <ul>
                            <li><strong>HTML</strong> - Structuring the content</li>
                            <li><strong>CSS</strong> - Styling the website</li>
                            <li><strong>VITE</strong></li>
                            <li><strong>REACT</strong></li>
                            <li><strong>JavaScript</strong> - Interactive Calculator</li>
                            <li><strong>GitHub</strong> - Version control and project hosting</li>
                            <li><strong>Vercel</strong> - Hosting the website online</li>
                        </ul>
                    </Section>

                        <br />

                    <Section>
                        <h3>Acknowledgments</h3>
                        <p>
                            I would like to thank the class CAS CS 391 for the assignment to make this website.
                        </p>
                    </Section>
                </MainText>
            </Main>
        </MainContent>
    )
}

export default Credits;