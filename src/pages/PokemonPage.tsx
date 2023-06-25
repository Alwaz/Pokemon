import React, { useEffect } from 'react'
import { getPokemonDetails } from '../services/api';

const PokemonPage = () => {
    // const { id } = useParams();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await getPokemonDetails('1');
            console.log('pokemon page==>', response)

            // setPokemon(response);
        };

        fetchPokemonDetails();
        // TODO: Add 'id' as dependency
    }, []);


    return (
        <div>
            Pokemon Page
        </div>
    )
}

export default PokemonPage
