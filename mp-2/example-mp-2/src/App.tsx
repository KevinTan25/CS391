import { useEffect, useState } from "react";
import BluePrint from "./components/BluePrint";

function App() {

  const [data, setData] = useState ([]);

  // Handle potential errors and bugs
  useEffect(() => {
    // We want to throttle the thread so it has enough time to fetch the data
    async function fetchData() {
      // We need to wait for all the data so we do await
      const rawData = await fetch("https://rickandmortyapi.com/api/character");

      // {results} will extract results from an object. String deconstruction
      const {results} = await rawData.json();

      setData(results);
    }
    // Do error handling here
    fetchData()
      .then(()=> console.log("Works"))
      .catch((e)=> console.log("This happened: " + e));
  }, [data.length]);

  return (
    <>
      {
        // Swtich to typescript
        data.map((character)=> 
          <BluePrint data={character}/>
        )
      }
    </>
  )
}

export default App
