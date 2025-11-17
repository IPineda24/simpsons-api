'use client';

import { useState, useEffect } from 'react';
import { characterService } from '../services/characterServices';
import { Character } from '../types/character';

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>( [] );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState<string | null>( null );

    useEffect( () => {
        const fetchCharacters = async () => {
            try {
                setLoading( true );
                const data = await characterService.getallCharactersNormal();
                setCharacters( data );
                setError( null );
            } catch ( err ) {
                setError( err instanceof Error ? err.message : 'Error al cargar personajes' );
                console.error( 'Error fetching characters:', err );
            } finally {
                setLoading( false );
            }
        };

        fetchCharacters();
    }, [] );

    return { characters, loading, error };
};