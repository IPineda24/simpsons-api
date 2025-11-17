'use client';

import Image from "next/image";

import { useCharacters } from "../hooks/useCharacters";

export default function CharactersPage() {
    const { characters, loading, error } = useCharacters();

    if ( loading ) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Cargando personajes...</div>
            </div>
        );
    }

    if ( error ) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl text-red-500">Error: { error }</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-yellow-500">
                Personajes de Los Simpson
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                { characters.map( ( character ) => (

                    <div

                        key={ character.id }
                        className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >

                        <Image
                            src={ `https://cdn.thesimpsonsapi.com/500${character.portrait_path}` }
                            width={ 500 }
                            height={ 500 }
                            alt=""
                        />

                        <h2 className="text-2xl font-bold text-blue-600 mb-2">
                            { character.name }
                        </h2>
                        <p className="text-gray-600">
                            <span className="font-semibold">Género:</span> { character.gender }
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            ID: { character.id }
                        </p>
                    </div>
                ) ) }
            </div>
        </div>
    );
}