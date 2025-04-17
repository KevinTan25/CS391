import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightpink;
`;

export default function AboutMe() {
    return (
        <StyledDiv>
            <h1>I am a CS391 Student</h1>
            <p>I really like this class</p>
        </StyledDiv>
    )
}