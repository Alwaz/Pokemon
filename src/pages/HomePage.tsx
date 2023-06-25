import React, { useEffect, useState } from 'react';
import { getPokemonDetails, getPokemons, searchPokemons } from '../services/api';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';

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


    const handleSearch = async (searchTerm: string) => {
        let response = null;
        if (searchTerm) {
            response = await searchPokemons(searchTerm);
            setPokemons([response]);

        } else {
            await getAllPokemons();
        }


    };

    return (
        <div className='flex flex-col'>
            {/* Header */}

            <div className="grid gap-4 p-4 bg-indigo-500 rounded-b-3xl">
                <div className='container mx-auto '>
                    <div className="hidden items-center justify-between md:flex md:w-full">
                        <div className="flex justify-start w-1/2 ">
                            <h1 className='text-3xl text-white'>Pokidex</h1>
                        </div>
                        <div className="flex justify-end w-1/2">
                            <SearchBar handleSearchPokemon={handleSearchPokemon} handleSearch={() => handleSearch(pokemonName)} />
                        </div>
                    </div>
                </div>


            </div>

            <div className="grid p-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 bg-slate-100">
                {pokemons && pokemons?.length > 0 && pokemons?.map((pokemon, index) => (
                    <PokemonCard
                        id={pokemon?.id}
                        name={pokemon?.name}
                        image={pokemon?.sprites && pokemon?.sprites['front_default']}
                        type={pokemon && pokemon?.types && pokemon?.types.length > 0 && pokemon?.types[0] && pokemon?.types[0]?.type?.name}
                        key={index}
                    />
                ))}
            </div>
            {/* Pagination */}
            <button onClick={() => { setOffset(offset + limit) }}>More</button>


        </div>
    );
}

export default HomePage;
