import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 75%;
    background-color: #00246B;
    padding: 4vh;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.5vh 1.5vw;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const MainImage = styled.div`
    max-width: 50%;
    margin: auto 1vw;
`;

const ProfileImage = styled.img`
    max-width: 100%;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

const MainText = styled.div`
    align-self: center;
    width: 60%;
    margin: 2vh 2vw;
    color: #F0F8FF;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        text-align: center;
    }
`;

const StyledP = styled.p`
    margin: 0 1vw;
    font-size: calc(1.3vw);
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 2vw);
    }
`;

export default function Index({setTitle} : {setTitle : (title: string) => void}) {
    const currentPath = useParams();
    let lastValue = Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
        if (lastValue === ""){
            document.title = "Home | Resume";
        } else {
            document.title = lastValue + " | Resume";
        }
        setTitle("Kevin Tan's Resume");
    },[setTitle, lastValue])


    return (
        <>
            <MainContainer>
                <Content>
                    <MainImage><ProfileImage src="/me.jpg" alt="Profile Picture" /></MainImage>
                    <MainText>
                        <StyledP>
                            My name is Kevin Tan and this is my resume. I was born and raised in New York City.
                            I currently reside in Boston. This picture is a picture of me in Isabella Stewart Gardner Museum, Boston.
                        </StyledP>
                        <br />
                        <StyledP>
                            <strong>Objective</strong><br />
                            I am an enthusiastic and hardworking computer scientist. Currently looking for a computer science job.
                            I am willing to relocate and learn whatever skills I am lacking.
                        </StyledP>
                    </MainText>
                </Content>
            </MainContainer>
        </>
    )
};