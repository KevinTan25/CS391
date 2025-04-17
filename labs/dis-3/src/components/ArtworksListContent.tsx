import { useEffect, useLayoutEffect, useState } from "react";
import { Artwork } from "../interfaces/Types";
import { ArtworkPreview } from "./ArtworkPreview";

export default function ArtworksListContent() {
    const [numArtworks, setNumArtworks] = useState(5);
    const [artworks, setArtworks] = useState<Artwork[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`);
            const { data } = await res.json();
            setArtworks(data);
        }
        fetchData()
            .then(() => console.log("Okay"))
            .catch((e) => console.log("this went wrong " + e));
    }, [numArtworks])
    
    return (
        <div>
            <input 
                type={"number"}
                value={numArtworks}
                placeholder={"Number of Artworks"}
                onChange={(e) => setNumArtworks(Number(e.target.value))}
            />
            <div>
                <p>numArtworks: {numArtworks}</p>
                {
                    artworks.map(artwork => <ArtworkPreview artwork={artwork} />)
                }
            </div>
        </div>
    )
}