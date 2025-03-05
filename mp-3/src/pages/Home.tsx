import styled from "styled-components"

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #3490e0;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #7b94a6;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const Main = styled.main`
    width: 85%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`

const MainText = styled.div`
    align-self: center;
    text-align: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(2px + 1vw);
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const ProfileImage = styled.img`
    max-width: 300px;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 1vh 1vw;
    
    @media screen and (max-width: 900px) {
        width: 80%;
        max-width: 250px;
        margin: 1vh auto;
    }
`;

const ContactSection = styled.div`
    align-self: flex-start;
    margin: 2vh 5vw;
    text-align: center;
    background-color: #7b94a6;
`;

const ContactLink = styled.a`
    color: #620067;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const MainTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(3px + 3vw);
    color: #620067;
`

const Home = () => {
    return (
        <PageWrapper>
            <Container>
                <MainContent>
                    <MainTitle>HOME | Nick Chang Portfolio</MainTitle>

                    <Main>
                        <ProfileImage
                            id={"profile-image"}
                            src={"/profile.png"}
                            alt={"profile"}
                            width={"300"}
                            height={"200"}
                        />
                        <MainText>
                            <p>Hello! I'm Nicholas Chang, a Computer Science major at Boston University!</p>
                            <br />
                            <p>I have a strong passion for Cybersecurity and Machine Learning.</p>
                            <br />
                            <p>This website showcases my Education, Experiences, Skills, References, and Projects.</p>
                        </MainText>
                    </Main>
                </MainContent>
            </Container>
            <ContactSection>
                <h1>Contact Me</h1>
                <br />
                <h2>Email: nickchang2003@gmail.com</h2>
                <h2><ContactLink href="https://www.linkedin.com/in/nickchang0826/">LinkedIn</ContactLink></h2>
                <h2><ContactLink href="https://github.com/SaeginChang">GitHub</ContactLink></h2>
            </ContactSection>
        </PageWrapper>
    )
}

export default Home;