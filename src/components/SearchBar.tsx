import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { searchPokemons } from '../services/api';

type SearchBarProps = {
    handleSearch?: (searchTerm: any) => Promise<void>;
    handleSearchPokemon: any
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, handleSearchPokemon }) => {



    return (
        <>
            <form action=''>
                <input
                    type='text'
                    name='search'
                    onChange={(e) => handleSearchPokemon(e.target.value)}
                    placeholder='Search Pokemons...'
                    className='px-3 py-2 font-light placeholder-gray-400 text-black rounded-md border-none ring-2 ring-gray-300 focus:bg-white border-transparent focus:border-blue-400'
                />
                <div onClick={handleSearch}>
                    <BsSearch />
                </div>

            </form>
        </>
    );
}

export default SearchBar;
