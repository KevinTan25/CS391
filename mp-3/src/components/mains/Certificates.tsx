import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MainContainer = styled.main`
    width: 100%;
`;

const CertificatesList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4vw;
    width: 100%;
    margin: auto;
    color: #F0F8FF;
    font-size: calc(1vh + 1vw);
    
    @media screen and (max-width: 900px) {
        max-width: 90%;
        text-align: center;
    }
`;

const CertificateEntry = styled.div`
    background-color: #D8E2DC;
    padding: 3vh;
    margin-bottom: 4vh;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
        padding: 2vh;
        margin-bottom: 2vh;
    }
`;

const Logo = styled.img`
    width: 15vw;
    max-width: 200px;
    height: auto;
    margin-bottom: 1vh;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

const Title = styled.h3`
    font-size: calc(2vh + 1vw);
    font-weight: bold;
    color: #00246B;
`;

const OrgDate = styled.p`
    font-size: calc(1vh + 1vw);
    font-style: italic;
    color: #00246B;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 0.8vw);
    }
`;

const Skills = styled.div`
    text-align: left;
    width: 100%;
    padding: 2vh;
    padding-left: 3vw;
    border-radius: 8px;
    color: #F0F8FF;
`;

const SkillsCategory = styled.h3`
    font-size: calc(1vh + 1vw);
    font-weight: bold;
    font-style: italic;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 1.5vw);
    }
`;

const SkillsList = styled.p`
    font-size: calc(1vh + 0.5vw);
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 1vw);
    }
`;


export default function Certificates({setTitle} : {setTitle : (title: string) => void}) {
    const currentPath = useParams();
    let lastValue = Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
        if (lastValue === ""){
            document.title = "Home | Resume";
        } else {
            document.title = lastValue + " | Resume";
        }
        setTitle("Kevin Tan's Certificates, Awards, and Technical Skills");
    },[setTitle, lastValue])

    return (
        <>
            <MainContainer>
                <CertificatesList>
                    <h2>Certificates</h2>
                    <CertificateEntry>
                        <Logo src="/googlelogo.png" alt="Google Logo" />
                        <Title>Google Cybersecurity Professional Certification</Title>
                        <OrgDate>Google Career Certificates</OrgDate>
                        <OrgDate>Issued Aug 2024</OrgDate>
                    </CertificateEntry>

                    <h2>Awards</h2>
                    <CertificateEntry>
                        <Logo src="/bulogo.png" alt="BU Logo" />
                        <Title>Boston University Deans List</Title>
                        <OrgDate>Issued Fall 2024</OrgDate>
                    </CertificateEntry>
                    <CertificateEntry>
                        <Logo src="/bulogo.png" alt="BU Logo" />
                        <Title>Boston University Deans List</Title>
                        <OrgDate>Issued Fall 2023</OrgDate>
                    </CertificateEntry>

                    <h2>Technical Skills</h2>
                    <Skills>
                        <SkillsCategory>Coding:</SkillsCategory>
                        <SkillsList>Java, Python, C, SQL, JavaScript, HTML, CSS, Bash, Go</SkillsList>

                        <SkillsCategory>Frameworks:</SkillsCategory>
                        <SkillsList>Django, React, Node.js</SkillsList>

                        <SkillsCategory>Developer Tools:</SkillsCategory>
                        <SkillsList>Git, Google Cloud Platform, Active Directory, VS Code, ServiceNow</SkillsList>
                    </Skills>
                </CertificatesList>
            </MainContainer>
        </>
    )
}