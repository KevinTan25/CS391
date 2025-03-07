import { styled } from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 10vh 2vw;
    background-color: #89ABE3;
    color: #27273b;
    text-align: left;
    
    font-family: "Dancing Script", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;

    @media screen and (max-width: 900px) {
        text-align: center;
    }
`;

const Title = styled.h1`
    text-align: left;
    font-size: calc(2px + 4vw);
    color: #27273b;
    
    @media screen and (max-width: 900px) {
        text-align: center;
        font-size: calc(10px + 5vw);
    }
`;

const HeaderImage = styled.img`
    max-width: 100%;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

export default function Header({props} : {props : string}) {
    return (
        <>
            <StyledHeader>
                <Title>{props}</Title>
                <p>Online Work Resume</p>
                <br/>
                <HeaderImage src="/nycbackground.jpg" alt="Image of NYC at Night"/>
            </StyledHeader>
        </>
    );
};