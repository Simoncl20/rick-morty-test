import axios, { AxiosError } from "axios";
import { CharacterQuery, CharactersResponse , ErrorResponse} from "./definitions";

export async function getCharacters(
    query: CharacterQuery,
    page: string,
) {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page,
                ...query 
            }
        });
        return response.data as CharactersResponse;
    } catch (error) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response?.status === 404) {
            return {
                error: true,
                status: 404,
                message: 'No se encontraron personajes con esos criterios'
            } as ErrorResponse;
        }
        
        console.error('Fetch Error', error);
        return {
            error: true,
            status: axiosError.response?.status || 500,
            message: 'Error al buscar personajes'
        };
    }
}