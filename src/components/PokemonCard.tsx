import React from 'react';
import { Link } from 'react-router-dom';

type PokemonCardProps = {
    id: number;
    name: string;
    image: string;
    type: string;
    key: string | number;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, image, type, key, }) => {
    return (
        <Link to={`/pokemon/${name}`} >
            <div className="bg-slate-300 rounded-lg shadow-xl">
                <div className='rounded-lg p-1 flex  flex-col items-center bg-white bg-opacity-30'>
                    <small>#0{id}</small>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <div>
                        <img src={image} alt={name} loading='lazy' className='object-contain h-48 w-96' />
                    </div>

                    <div className='flex flex-col justify-center flex-col items-center'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <small className='text-base pb-4'>{type}</small>
                    </div>
                </div>

            </div>
        </Link>


    )
}

export default PokemonCard;
