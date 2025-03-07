import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    color: #27273b;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const Links = styled.div`
    text-align: center;
    width: 80%;
    padding: 2vh;
    background-color: #E8F1F2;
    border-radius: 10px;
    margin-bottom: 4vh;
    
    @media screen and (max-width: 900px) {
        width: 80%;
        margin: 10px;
    }
`;

const Titles = styled.h3`
    font-size: 2vw;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3vh + 1vw);
    }
`;

const LinkItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2vh;
    
    &:hover {
        text-decoration: underline;
    }
`;

const ContactLogo = styled.img`
    width: 4vw;
    height: auto;
    margin-right: 10px;
    
    @media screen and (max-width: 900px) {
        width: 7vw ;
        max-width: 100%;
    }
`;

const RealLink = styled.a`
    text-decoration: none;
    display: block;
    padding: 1vh;
    background-color: #00246B;
    color: #F0F8FF;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 1vw);
        text-align: center;
    }
`;

const ContactInfo = styled.div`
    text-align: center;
    width: 80%;
    background-color: #E8F1F2;
    padding: 2vh;
    border-radius: 10px;
    margin-bottom: 4vh;
    
    @media screen and (max-width: 900px) {
        width: 80%;
        margin: 10px;
    }
`;

const ContactLabel = styled.span`
    font-weight: bold;
    color: #003366;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const References = styled.div`
    text-align: center;
    width: 80%;
    background-color: #E8F1F2;
    padding: 2vh;
    border-radius: 10px;
    
    @media screen and (max-width: 900px) {
        width: 80%;
        margin: 10px;
    }
`;

const ReferenceItem = styled.div`
    margin-bottom: 2vh;
`;

const ReferenceName = styled.p`
    font-size: calc(1.5vh + 1vw);
    font-weight: bold;
    color: #003366;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1.3vh + 1vw);
    }
`;

const ReferencePosition = styled.p`
    font-size: calc(1.2vh + 1vw);
    font-style: italic;
    color: #003366;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 0.8vw);
    }
`;

const ReferenceEmail = styled.p`
    color: #003366;
    font-size: calc(0.5vh + 1vw);
    
    @media screen and (max-width: 900px) {
        font-size: calc(0.8vh + 1vw);
    }
`;

export default function Contacts({setTitle} : {setTitle : (title: string) => void}) {
    const currentPath = useParams();
    let lastValue = Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
        if (lastValue === ""){
            document.title = "Home | Resume";
        } else {
            document.title = lastValue + " | Resume";
        }
        setTitle("Kevin Tan's Contacts");
    },[setTitle, lastValue])

    return (
        <>
            <MainContainer>
                <Links>
                    <Titles>Links to my websites</Titles><br/>
                    <LinkItem>
                        <a href="https://www.linkedin.com/in/kevin-tan-984a29258" target="_blank">
                            <ContactLogo src="/linkedin.png" alt="LinkedIn Picture Link" />
                        </a><br/>
                        <RealLink href="https://www.linkedin.com/in/kevin-tan-984a29258" target="_blank">Linked In</RealLink>
                    </LinkItem>

                    <LinkItem>
                        <a href="https://github.com/KevinTan25" target="_blank">
                            <ContactLogo src="/githubimg.png" alt="Github Picture Link" />
                        </a><br/>
                        <RealLink href="https://github.com/KevinTan25" target="_blank">Github</RealLink>
                    </LinkItem>
                </Links>

                <ContactInfo>
                    <Titles>Contact Information</Titles>
                    <ContactLabel>Personal Email:</ContactLabel> ktan03@bu.edu<br/>
                    <ContactLabel>Work Email:</ContactLabel> kevtan.work@gmail.com<br/>
                    <ContactLabel>Phone Number:</ContactLabel> 917-935-9796<br/>
                </ContactInfo>

                <References>
                    <Titles>References</Titles>
                    <ReferenceItem>
                        <ReferenceName>Anna Richardson</ReferenceName>
                        <ReferencePosition>Stage Manager, BU College of Fine Arts</ReferencePosition>
                        <ReferenceEmail>Email: annagr@bu.edu</ReferenceEmail>
                    </ReferenceItem>
                    <ReferenceItem>
                        <ReferenceName>Fan Yang</ReferenceName>
                        <ReferencePosition>Senior Staff Software Engineer, Google | Professor, Boston University</ReferencePosition>
                        <ReferenceEmail>Email: fayang@bu.edu</ReferenceEmail>
                    </ReferenceItem>
                </References>
            </MainContainer>
        </>
    )
}