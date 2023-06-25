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
        <div className='container'>
            <div>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <small>{type}</small>
            </div>
        </div>
    )
}

export default PokemonCard;
