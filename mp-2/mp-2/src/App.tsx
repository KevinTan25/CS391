import Pokemon from "./components/Pokemon.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Cards } from "./interfaces/Cards.tsx";

const ContainerDiv = styled.div`
  width: 80vw;
  height: auto;
  margin: auto;
  border: 5px solid;
  background-color: #3B4CCA;
`;


export default function App() {
    
  // useState Hooks to store data
  const [ datas, setDatas ] = useState<Cards[]>([]);

  // useEffect Hook to error handle and re-render
  useEffect(() => {
    async function fetchData() : Promise<void> {
        const rawData = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=50");
        const { data } = await rawData.json();
        setDatas(data);
    }
      fetchData()
        .then(() => console.log("Pokemon data fetched successfully"))
        .catch((e : Error) => console.log("Data failed to fetch: " + e));
  }, [datas.length]);

  return (
    <ContainerDiv>
      <Pokemon data={datas} />
    </ContainerDiv>
  )
}
