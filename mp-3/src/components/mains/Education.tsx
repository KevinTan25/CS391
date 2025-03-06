import styled from "styled-components";

const MainContainer = styled.main`
    width: 100%;
`;

const EducationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 100%;
    padding: 4vh;
    background-color: #00246B;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const School = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #D8E2DC;
    padding: 2vh;
    border-radius: 10px;
    margin: 0 0.5vw;
    
    @media screen and (max-width: 900px) {
        width: 90%;
        margin-bottom: 2vh;
    }
`;

const Name = styled.h3`
    text-align: center;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3vw);
    }
`;

const SchoolLogo = styled.img`
    height: auto;
    max-width: 70%;
    padding: 5px;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

const StyledP = styled.p`
    text-align: center;
    
    @media screen and (max-width: 900px) {
        font-size: calc(5px + 1.5vw);
    }
`;

export default function Education() {
    return (
        <>
            <MainContainer>
                <EducationContainer>
                    <School>
                        <Name>Boston University</Name>
                        <br />
                        <SchoolLogo src="/bulogo.png" alt="Boston University"/>
                        <br />
                        <StyledP><em>September 2021 - May 2025</em></StyledP>
                        <StyledP>
                            I currently attend Boston University as a senior studying Computer Science in the College of
                            Arts and Sciences pursuing a Bachelor's Degree.
                        </StyledP>
                    </School>

                    <School>
                        <Name>Brooklyn Technical High School</Name>
                        <br />
                        <SchoolLogo src="/bthslogo.png" alt="Brooklyn Technical High School"/>
                        <br />
                        <StyledP><em>September 2017 - June 2021</em></StyledP>
                        <StyledP>
                            I went to high school in Brooklyn Technical High School. This is a school located in New York City.
                            I obtained a High School Diploma in June 2021.
                        </StyledP>
                    </School>
                </EducationContainer>
            </MainContainer>
        </>
    )
}