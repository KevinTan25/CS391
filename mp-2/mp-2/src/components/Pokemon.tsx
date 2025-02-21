import { Cards } from "../interfaces/Cards";
import styled from "styled-components";

const AllCharsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 10px 10px;
    padding: 20px;
    background-color: #CC0000;
`;

const SingleCardDiv = styled.div<{ rarity: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #9966CC;
    color: ${(props) => (props.rarity === "Rare Holo" || props.rarity === "Rare Holo GX" ? '#EAC787' : 'white')};
    border: 3px solid ${(props) => (props.rarity === "Rare Holo" || props.rarity === "Rare Holo GX" ? "#EAC787" : "#FFFFFF")};
    padding: 30px;
    width: 280px;
    border-radius: 10px;
    font-size: calc(0.5vw + 10px);
    margin: 10px auto;
`;

const CardImage = styled.img`
    height: 40vh;
    max-width: 250px;
    border-radius: 5px;
    margin: 10px 0;
`;

const InfoText = styled.p`
    margin: 5px 0;
    font-size: calc(1vw + 6px);
`;

const AttacksContainer = styled.div`
    margin-top: 10px;
    text-align: left;
    width: 100%;
`;

const WeaknessesContainer = styled.div`
    margin-top: 10px;
    text-align: center;
    width: 100%;
`;

const AttackText = styled.p`
    font-size: calc(0.4vw + 9px);
    margin: 5px 0;
`;

const WeaknessText = styled.p`
    font-size: calc(0.5vw + 10px);
    color: #FF6B6B;
`;

const Heading3 = styled.h3`
    font-size: calc(1vw + 7px);
`;

export default function Pokemon(props : { data : Cards[] }) {
    return (
        <AllCharsDiv>
            {props.data.map((chars : Cards) => (
                <SingleCardDiv key={chars.id} rarity={chars.rarity}>
                    <h1>{chars.name}</h1>

                    <Heading3>{chars.rarity || "Rarity: Unknown"}</Heading3>

                    <InfoText><strong>HP:</strong> {chars.hp}</InfoText>
                    <InfoText><strong>Types:</strong> {chars.types}</InfoText>

                    <CardImage src={chars.images.small} alt={`Image of ${chars.name}`} />

                    <AttacksContainer>
                        <Heading3>Attacks:</Heading3>
                        {(chars.attacks != null && chars.attacks.length > 0) ? (
                            chars.attacks.map((attack, index) => (
                                <AttackText key={index}>
                                    <strong>{attack.name}</strong> - {attack.damage}  
                                    <br />
                                    {attack.text}
                                </AttackText>
                            ))
                        ) : (
                            <AttackText>No Attacks</AttackText>
                        )}
                    </AttacksContainer>

                    <WeaknessesContainer>
                        <Heading3>Weaknesses:</Heading3>
                        {(chars.weaknesses != null && chars.weaknesses.length > 0) ? (
                            chars.weaknesses.map((weakness, index) => (
                                <WeaknessText key={index}>
                                    {weakness.type}: {weakness.value}
                                </WeaknessText>
                            ))
                        ) : (
                            <WeaknessText>No Weaknesses</WeaknessText>
                        )}
                    </WeaknessesContainer>

                </SingleCardDiv>
            ))}
        </AllCharsDiv>
    );
}
