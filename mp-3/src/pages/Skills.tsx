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

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const SkillsList = styled.ul`
    font-size: calc(1px + 1.5vw);
    line-height: 1;
    margin-bottom: 8px;
    text-align: center;
    list-style-type: none;
`;

const SkillsItem = styled.li`
    font-size: calc(1px + 1.5vw);
    line-height: 1;
    margin-bottom: 8px;
    text-align: center;
    list-style-type: none;
`;

const MainTitle = styled.h3`
    margin: 2vh 2vw 0;
    text-align: center;
    font-size: calc(3px + 3vw);
    color: #620067;
`

const JobTitle = styled.span`
    display: block;
    text-align: center;
    font-size: calc(1px + 2vw);
    margin: 5vh 2vw 4vh;
`

const Skill = () => {
    return (
        <MainContent>
            <MainTitle>SKILLS | Nick Chang Portfolio</MainTitle>

            <Main>
                <MainText>
                    <JobTitle>Programming Languages</JobTitle>
                    <SkillsList>
                        <SkillsItem>Python</SkillsItem>
                        <SkillsItem>C++</SkillsItem>
                        <SkillsItem>C#</SkillsItem>
                        <SkillsItem>Java</SkillsItem>
                        <SkillsItem>MATLAB</SkillsItem>
                        <SkillsItem>R</SkillsItem>
                        <SkillsItem>Assembly</SkillsItem>
                        <SkillsItem>JavaScript</SkillsItem>
                        <SkillsItem>C</SkillsItem>
                        <SkillsItem>Go Lang</SkillsItem>
                    </SkillsList>
                    <br />
                    <JobTitle>Tools & Technologies</JobTitle>
                    <SkillsList>
                        <SkillsItem>Linux</SkillsItem>
                        <SkillsItem>AutoCAD</SkillsItem>
                        <SkillsItem>Firebase</SkillsItem>
                    </SkillsList>
                </MainText>
            </Main>
        </MainContent>
    )
}

export default Skill;