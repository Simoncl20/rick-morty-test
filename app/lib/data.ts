import axios from "axios";
import { CharacterQuery, CharactersResponse } from "./definitions";

export async function getCharacters(
    query: CharacterQuery,
    page: string,
) {
    try {
        const response : CharactersResponse = await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page,
                ...query 
            }
        });
        return response;
    } catch (error) {
        console.error('Fetch Error', error);
        throw new Error('Failed to fetch Characters');
    }
}