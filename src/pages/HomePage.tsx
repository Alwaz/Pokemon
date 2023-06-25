import React, { useEffect, useState } from 'react';
import { getPokemonDetails, getPokemons, searchPokemons } from '../services/api';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';

const HomePage: React.FC = () => {
    const [pokemons, setPokemons] = useState<any[] | never[]>([]);
    const [pokemonName, setPokemonName] = useState<string>("")



    const getAllPokemons = async () => {
        const response = await getPokemons();

        function createPokemonObject(result) {
            result.forEach(async (pokimon) => {
                const res = await getPokemonDetails(pokimon?.name)
                setPokemons(currentPokimons => [...currentPokimons, res]);
            });
        }
        createPokemonObject(response.results)


        // setTotalPages(Math.ceil(response.count / response.results.length));
    };


    useEffect(() => {
        getAllPokemons();
    }, []);


    const handleSearchPokemon = (pokemonName: string) => {
        setPokemonName(pokemonName);
    };


    const handleSearch = async (searchTerm) => {
        console.log('search', searchTerm)
        const response = await searchPokemons(searchTerm);
        setPokemons([response]);
        // setPokemons(response.results);
        // setTotalPages(1); // Reset pagination for search results
    };

    return (
        <div className='flex flex-col'>
            <div className="flex justify-center bg-red-400">
                <h1 className='text-3xl text-white py-2'>Pokidex</h1>
            </div>
            <div className="flex flex-col">
                <SearchBar handleSearchPokemon={handleSearchPokemon} handleSearch={() => handleSearch(pokemonName)} />
                {/* TODO: these should be in grid */}
                <div className='flex flex-col'>
                    {pokemons && pokemons?.length > 0 && pokemons?.map((pokemon, index) => (
                        <PokemonCard
                            id={pokemon?.id}
                            name={pokemon?.name}
                            image={pokemon?.sprites?.other?.dream_world?.front_default}
                            type={pokemon && pokemon?.types[0] && pokemon?.types[0]?.type?.name} key={index}
                        />
                    ))}
                </div>



            </div>
        </div>
    );
}

export default HomePage;
