 import {useRef, useState} from "react";
import {getGifsByQuery} from "../actions/get-gifs-by-query.actions.ts";
import type {Gif} from "../interfaces/gif.interface.ts";

 // const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previusTerms, setPreviusTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({ });

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
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

        gifsCache.current[query] = gifs;
        console.log(gifsCache);
    }


    return {
        // Properties
        gifs,

        // Methods
        handleSearch,
        handleTermClicked,
        previusTerms,


    }
};
