import axiosInstance from '../lib/axios';
import { Character } from '../types/character';
import axios from 'axios';

export const characterService = {
    // GET - Obtener todos los personajes
    getAllCharacters: async (): Promise<Character[]> => {
        const { data } = await axiosInstance.get<Character[]>( '/characters' );
        return data.results;
    },

    // GET -all
    getallCharactersNormal: async (): Promise<Character[]> => {
        const { data } = await axios.get( 'https://thesimpsonsapi.com/api/characters' );
        return data.results;
    },
};