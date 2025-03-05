import styled from "styled-components"

const FooterContainer = styled.footer`
    background-color: #2d3436;
    color: white;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const FooterLink = styled.a`
    color: bisque;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>All Rights Reserved By Nicholas Chang <FooterLink href="/credits">Credits</FooterLink> &copy;</p>
        </FooterContainer>
    )
}

export default Footer;