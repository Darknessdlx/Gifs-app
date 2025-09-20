import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";
import {useGifs} from "./gifs/hooks/useGifs.tsx";

export const GifsApp = () => {

    const {handleSearch, handleTermClicked, previusTerms, gifs} = useGifs();

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
