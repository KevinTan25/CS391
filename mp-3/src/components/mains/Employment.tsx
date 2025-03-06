import styled from "styled-components";

const EmploymentMain = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #00246B;
    padding: 5vh;
    max-width: 80%;
    font-size: calc(2vw + 1px);
    color: #C5DBC4;
    
    @media screen and (max-width: 900px) {
        justify-content: center;
        text-align: center;
    }
`;

const StyledH2 = styled.h2`
    @media screen and (max-width: 900px) {
        font-size: calc(7px + 3vw);
    }
`;

const Employments = styled.div`
    padding: 2vh;
    font-size: calc(1vh + 10px);
    
    @media screen and (max-width: 900px) {
        padding: 2vh;
        margin-bottom: 2vh;
    }
`;

const JobTitle = styled.h3`
    font-weight: bold;
    
    @media screen and (max-width: 900px) {
        font-size: calc(5px + 2.5vw);
    }
`;

const Company = styled.p`
    font-style: italic;
    font-size: calc(1vh + 10px);
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
    }
`;

const StyledDate = styled.p`
    font-style: italic;
    font-size: calc(1vh + 10px);
    font-weight: bold;
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
    }
`;

const Desc = styled.ul`
    padding-left: 2vw;
`;

const StyledImg = styled.img`
    max-width: 80%;
    padding-top: 1vh;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

export default function Employment() {
    return (
        <>
            <EmploymentMain>
                <StyledH2>Employment</StyledH2>

                <Employments>
                    <JobTitle>Information Technology Internship</JobTitle>
                    <Company>NYC DSS, Enterprise Access Management Office</Company>
                    <StyledDate>June 2023 - August 2023</StyledDate>
                    <Desc>
                        <li>Developed and implemented code for handling Big Data, focusing on creating user accounts and automating data input using Microsoft PowerShell.</li>
                        <li>Synergized Active Directory and ServiceNow resources to employ a ticketing framework, seamlessly intaking, addressing, and troubleshooting technical inquiries.</li>
                        <li>Enhanced development speed and adaptability by applying agile software engineering principles to streamline processes and automate data input.</li>
                    </Desc>
                </Employments>

                <Employments>
                    <JobTitle>Information Technology Support Desk Internship</JobTitle>
                    <Company>NYC DCAS, Information Technology Department</Company>
                    <StyledDate>June 2024 - August 2024</StyledDate>
                    <Desc>
                        <li>Delivered comprehensive technical support to clients, troubleshooting complex computer hardware and software issues to ensure seamless user experiences.</li>
                        <li>Facilitated the configuration and setup of computer systems and telecommunication devices, enhancing operational efficiency across the organization.</li>
                        <li>Managed client inquiries through email and phone, providing clear and concise technical guidance.</li>
                    </Desc>
                </Employments>

                <StyledImg src="/worldtrade.jpg" alt="World Trade Center Area" />
            </EmploymentMain>
        </>
    )
}