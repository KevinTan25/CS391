import { styled } from "styled-components";
import { Link } from "react-router-dom";
// import Index from "./Index.tsx";

const StyledFooter = styled.footer`
    background-color: #809BCE;
    display: flex;
    color: #27273b;
    justify-content: left;
    flex-direction: row;
    padding: 2vh;
    
    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`;

const StyledLink = styled(Link)`
    color: #F0F8FF;
    
    // Dont know if this is correct
    &:hover {
        background-color: #003366;
    }
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>
                    All Rights Reserved by Kevin Tan <StyledLink to="/">Credits</StyledLink> &copy;
                </p>
            </StyledFooter>
        </>
    );
};