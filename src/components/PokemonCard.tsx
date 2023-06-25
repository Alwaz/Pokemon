import React from 'react';

type PokemonCardProps = {
    id: number;
    name: string;
    image: string;
    type: string;
    key: string | number;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, image, type, key, }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 my-1 border border-gray-200 rounded w-40 text-center shadow-sm">
            <div className='rounded-lg p-1 bg-white bg-opacity-30'>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className='flex flex-col w-full'>
                <h3>{name}</h3>
                <small>{type}</small>
            </div>
        </div>
    )
}

export default PokemonCard;
