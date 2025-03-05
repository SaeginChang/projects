import styled from "styled-components";

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: #7b94a6;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const MainText = styled.div`
    align-self: center;
    width: 100%;
    margin: 1vh 1vw;
    font-size: calc(1px + 1.5vw);
    line-height: 1;

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

const Experience = () => {
    return (
        <MainContent>
            <MainTitle>EXPERIENCE | Nick Chang Portfolio</MainTitle>

            <Main>
                <MainText>
                    <Section>
                        <JobTitle>Data Security IT Intern</JobTitle>
                        <h3>Navistar</h3>
                        <h3>May 2024 - Aug 2024</h3>
                        <ul>
                            <li>Collaborated with a 6-person IAM team to design Identity Security solutions.</li>
                            <li>Assisted in executing identity monitoring tasks for security compliance.</li>
                        </ul>
                    </Section>
                    <Section>
                        <JobTitle>Undergraduate Research Intern</JobTitle>
                        <h3>BU Research</h3>
                        <h3>Aug 2023 - Dec 2023</h3>
                        <ul>
                            <li>Researched database optimization techniques to identify cancer cells efficiently.</li>
                            <li>Developed data visualization tools using DuckDB, R, and JavaScript.</li>
                        </ul>
                    </Section>
                    <Section>
                        <JobTitle>Software Engineer Intern</JobTitle>
                        <h3>InArch</h3>
                        <h3>June 2023 - Aug 2023</h3>
                        <ul>
                            <li>Developed architectural drawings using CAD software.</li>
                            <li>Led the development of a custom file organization and tax management tool.</li>
                        </ul>
                    </Section>
                </MainText>
            </Main>
        </MainContent>
    )
}

export default Experience;