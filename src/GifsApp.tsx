import {mockGifs} from "./mock-data/gifs-mock.ts";
import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {useState} from "react";

export const GifsApp = () => {

    const [previusTerms, setPreviusTerms] = useState(["dragon ball z"]);

    const handleTermClicked = (term: string) => {
        console.log(term);
    }

    const handleSearch = (query: string) => {
        console.log({query});
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
            <GifList gifs={mockGifs}/>



        </>
    );
};
