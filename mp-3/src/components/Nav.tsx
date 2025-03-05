import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarContainer = styled.nav`
    width: 15%;
    background-color: #74b9ff;
    padding: 10px;
    text-align: center;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        width: 85%;
        margin: 0 auto;
    }
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding-left: 0;
    flex-direction: column;'
    text-align: center;

    @media screen and (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const NavItem = styled.li`
    font-size: calc(2px + 1vw);
    width: 100%;
    background-color: #9084e3;
    padding: 2vh 0;
    margin: 5vh auto;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        padding: 1% 0.5%;
        margin: 1% 0.5%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const Nav = () => {
    return (
        <NavBarContainer>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
                <NavItem><StyledLink to="/skills">Skills</StyledLink></NavItem>
                <NavItem><StyledLink to="/references">References</StyledLink></NavItem>
                <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
                <NavItem><StyledLink to="/credits">Credits</StyledLink></NavItem>
            </NavList>
        </NavBarContainer>
    )
}

export default Nav;
