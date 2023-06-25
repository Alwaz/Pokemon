import React from 'react';

type SearchBarProps = {
    handleSearch: (searchTerm: any) => Promise<void>;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
    return (
        <>
            <form action=''>
                <input
                    type='text'
                    name='search'
                    onChange={handleSearch}
                    placeholder='Search Pokemons...'
                    className='px-3 py-2 font-light placeholder-gray-400 text-black rounded-md border-none ring-2 ring-gray-300 focus:bg-white border-transparent focus:border-blue-400'
                />
            </form>
        </>
    );
}

export default SearchBar;
