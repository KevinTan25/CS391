import styled from 'styled-components';
import Calculator from "./Calculator.tsx"

const StyledMain = styled.main`
    padding: 2vh;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3vh;
    background-color: #F0F8FF;
    border-radius: 10px;
    width: 80%;
    margin: auto;
    
    @media screen and (max-width: 900px) {
        width: 95%;
    }
`;

// External Link
const GithubLink = styled.a`
    color: #003366;

    &:hover {
        background-color: #809BCE;
    }
`;

const ProjectEntry = styled.div`
    background-color: #D8E2DC;
    padding: 2vh;
    margin-bottom: 2vh;
    border-radius: 8px;
    width: 100%;
    
    @media screen and (max-width: 900px) {
        max-width: 100%;
        padding: 2vh;
        margin-bottom: 2vh;
    }
`;

const ProjectTitle = styled.h3`
    font-size: calc(2vh + 1vw);
    font-weight: bold;
    color: #003366;
    
    @media screen and (max-width: 900px) {
        font-size: calc(2vh + 2vw);
    }
`;

const StyledDate = styled.p`
    font-style: italic;
    font-size: calc(1vw + 5px);
    font-weight: bold;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1vh + 0.8vw);
    }
`;

const Desc = styled.ul`
    padding-left: 2vw;
`;

export default function Projects() {
    return (
        <>
            <StyledMain>
                <ProjectsList>
                    <h2>You can visit my github for all my projects: <GithubLink href="https://github.com/KevinTan25" target="_blank">My Github</GithubLink></h2>
                    <h2>Projects</h2>

                    <ProjectEntry>
                        <ProjectTitle>MapReduce | <em>Go, Git</em></ProjectTitle>
                        <StyledDate>February 2024 – March 2024</StyledDate>
                        <Desc>
                            <li>Designed and implemented a MapReduce framework to efficiently process and analyze large datasets, optimizing data workflows.</li>
                            <li>Developed custom map and reduce functions to handle specific data processing tasks, significantly reducing computational time.</li>
                            <li>Utilized parallel computing techniques to scale data processing operations, enhancing overall system performance.</li>
                        </Desc>
                    </ProjectEntry><br/>

                    <ProjectEntry>
                        <ProjectTitle>Raft | <em>Go, Git</em></ProjectTitle>
                        <StyledDate>March 2024 – May 2024</StyledDate>
                        <Desc>
                            <li>Implemented the Raft consensus algorithm as a replicated state machine protocol to achieve fault-tolerant distributed systems.</li>
                            <li>Developed a robust log synchronization mechanism to ensure all replica servers maintain consistent state, even during server failures or network issues.</li>
                            <li>Designed the Raft module using Go, incorporating RPC communication between instances to manage log entries and maintain replicated logs.</li>
                            <li>Employed concurrency techniques and resource locking strategies to enhance the reliability and efficiency of the Raft implementation.</li>
                        </Desc>
                    </ProjectEntry><br/>

                    <ProjectEntry>
                        <ProjectTitle>Spotify Concert Recommendation | <em>Python, Git, APIs, Javascript, HTML, CSS</em></ProjectTitle>
                        <StyledDate>January 2024 – May 2024</StyledDate>
                        <Desc>
                            <li>Developed a full-stack service-oriented website that leverages Spotify’s API to analyze users’ listening history and recommend live concerts/events based on their top artists.</li>
                            <li>Integrated Ticketmaster’s API to provide real-time event listings and concert details, enhancing user engagement with personalized recommendations.</li>
                            <li>Designed and implemented both front-end and back-end components to create a seamless user experience, utilizing modern web development frameworks.</li>
                        </Desc>
                    </ProjectEntry>

                    <Calculator />
                </ProjectsList>
            </StyledMain>
        </>
    );
}