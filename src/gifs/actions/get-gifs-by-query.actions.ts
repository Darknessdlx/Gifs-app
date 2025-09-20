import type {GiphyResponse} from "../interfaces/giphy.response.ts";
import type {Gif} from "../interfaces/gif.interface.ts";
import {giphyApi} from "../api/giphy.api.ts";


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>('/search', {
            params: {
                q: query,
                limit: 10,
            }
        }
    );

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=gWjx3VRDDin6eoynoeApSmCaYOgfBUOF&q=${query}&limit=10&lang=es`)


    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
        size: Number(gif.images.original.width),
    }));

};