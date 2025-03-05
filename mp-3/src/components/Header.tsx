import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #6c5ce7;
    color: tan;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Nicholas Chang</h1>
            <p>Welcome to my Online Resume</p>
        </HeaderContainer>
    )
}

export default Header;