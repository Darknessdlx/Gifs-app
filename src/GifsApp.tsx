import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {useState} from "react";

import {getGifsByQuery} from "./gifs/actions/get-gifs-by-query.actions.ts";
import type {Gif} from "./gifs/interfaces/gif.interface.ts";

export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previusTerms, setPreviusTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log(term);
    }

    const handleSearch = async(query: string) => {

        query = query.trim().toLowerCase();

        if (query.length === 0) {
            return;
        }

        if (previusTerms.includes(query)) {
            return;
        }

        setPreviusTerms([query, ...previusTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);

    }
    
    return (
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/*SearchBar*/}
            <SearchBar placeholder= "Buscar Gifs" onQuery={handleSearch} />

            {/* PreviousSearches */}
            <PreviousSearches searches={previusTerms} onLabelClicked={handleTermClicked}/>

            {/*Gifs*/}
            <GifList gifs={gifs}/>



        </>
    );
};
