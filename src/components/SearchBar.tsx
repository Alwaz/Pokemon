import React from 'react';
import { BsSearch } from 'react-icons/bs'

type SearchBarProps = {
    handleSearch?: (searchTerm: any) => Promise<void>;
    handleSearchPokemon: any
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, handleSearchPokemon }) => {
    return (
        <div className="flex items-center md:w-96 bg-white rounded-md border border-gray-300 px-2">
            <input
                type="text"
                name="search"
                autoFocus
                onChange={(e) => handleSearchPokemon(e.target.value)}
                placeholder="Search Pokemons..."
                className=" flex-grow py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
            />
            <div onClick={handleSearch} className="ml-2 w-2 bg-slate-200 transition-colors duration-300 ease-in-out hover:bg-slate-300 h-8 flex flex-grow justify-center items-center cursor-pointer rounded-full">
                <BsSearch className="text-gray-600" />
            </div>
        </div>
    );
};


export default SearchBar;
