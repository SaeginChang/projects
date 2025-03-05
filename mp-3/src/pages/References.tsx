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
        width: 100%;
    }
`

const MainTitle = styled.h3`
    margin: 2vh 2vw;
    text-align: center;
    font-size: calc(3px + 3vw);
    color: #620067;
`

const JobTitle = styled.span`
    display: block;
    text-align: center;
    font-size: calc(1px + 2vw);
    margin: 5vh 2vw 0;
`


const Section = styled.section`
    margin: 20px 0;
`;

const References = () => {
    return (
        <MainContent>
            <MainTitle>REFERENCES | Nick Chang Portfolio</MainTitle>

            <Main>
                <MainText>
                    <Section>
                        <JobTitle>Maurice Yarbrough</JobTitle>
                        <p>Senior Manager Information Technology Identity Manager</p>
                        <p>Navistar</p>
                        <p>Email: maurice.yarbrough@navistar.com</p>
                    </Section>
                    <br />
                    <Section>
                        <JobTitle>GiYoung Kim</JobTitle>
                        <p>CIO of InArch</p>
                        <p>Manager during time as a Software Engineer Intern</p>
                        <p>Email: gk@in-arch.com</p>
                    </Section>
                </MainText>
            </Main>
        </MainContent>
    )
}

export default References;