import React, { useEffect, useState } from 'react';
import { getPokemonDetails, getPokemons, searchPokemons } from '../services/api';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';

const HomePage: React.FC = () => {
    const [pokemons, setPokemons] = useState<any[] | never[]>([]);
    const [pokemonName, setPokemonName] = useState<string>("")
    const [offset, setOffset] = useState<number>(0)
    const limit = 10;



    const getAllPokemons = async () => {
        const response = await getPokemons(offset, limit);

        function createPokemonObject(result) {
            result.forEach(async (pokimon) => {
                const res = await getPokemonDetails(pokimon?.name)
                setPokemons(currentPokimons => [...currentPokimons, res]);
            });
        }
        createPokemonObject(response.results)
    };


    useEffect(() => {
        getAllPokemons();
    }, [offset]);


    const handleSearchPokemon = (pokemonName: string) => {
        setPokemonName(pokemonName);
    };


    const handleSearch = async (searchTerm) => {
        console.log('search', searchTerm)
        const response = await searchPokemons(searchTerm);
        setPokemons([response]);
        // setTotalPages(1); // Reset pagination for search results
    };

    return (
        <div className='flex flex-col '>
            <div className="flex justify-center bg-red-400">
                <h1 className='text-3xl text-white py-2'>Pokidex</h1>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-600 ">

                <SearchBar handleSearchPokemon={handleSearchPokemon} handleSearch={() => handleSearch(pokemonName)} />
                {/* TODO: these should be in grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 bg-red-200'>
                    {pokemons && pokemons?.length > 0 && pokemons?.map((pokemon, index) => (
                        <PokemonCard
                            id={pokemon?.id}
                            name={pokemon?.name}
                            image={pokemon?.sprites?.other?.dream_world?.front_default}
                            type={pokemon && pokemon?.types[0] && pokemon?.types[0]?.type?.name}
                            key={index}
                        />
                    ))}
                </div>



            </div>


            {/* Pagination */}
            <button onClick={() => { setOffset(offset + limit) }}>More</button>


        </div>
    );
}

export default HomePage;
