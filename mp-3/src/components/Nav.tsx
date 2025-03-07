import { styled } from "styled-components";
// import Index from "./Index.tsx";
// import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
    width: 25%;
    background-color: #89ABE3;
    padding: 1vw;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        background-color: #dda0dd;
    }
`;

const UnorderedNav = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* Removes the bullet points */
    list-style: none;
    text-align: center;
    padding-left: 0;
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 100%;
        background-color: #89ABE3;
    }
`;

const ListItem = styled.li`
    font-size: calc(10px + 1vw);
    width: 90%;
    background-color: #00246B;
    padding: 2vh 0;
    margin: 3vh auto;
    border-radius: 5px;
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.0vw);
        width: auto;
        padding: 1% 1%;
        margin: 1% .5%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #F0F8FF;
    display: block;
    width: 100%;
    padding: 1vh;
    border-radius: 5px;
    
    &:hover {
        background: #003366;
    }
`;

export default function Nav() {
    return (
        <>
            <NavContainer>
                <UnorderedNav>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><StyledLink to="/education">Education</StyledLink></ListItem>
                    <ListItem><StyledLink to="/employment">Employment</StyledLink></ListItem>
                    <ListItem><StyledLink to="/projects">Projects</StyledLink></ListItem>
                    <ListItem><StyledLink to="/certificates">Certificates</StyledLink></ListItem>
                    <ListItem><StyledLink to="/contacts">Contact</StyledLink></ListItem>
                </UnorderedNav>
            </NavContainer>
        </>
    );
};