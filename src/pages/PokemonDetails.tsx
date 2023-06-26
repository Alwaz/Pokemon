import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../services/api';

const PokemonDetails = () => {
    const [singlePokemon, setSinglePokemon] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [numberOfGame, setNumberOfGame] = useState([]);
    const [image, setImage] = useState(null);

    const { name } = useParams();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await getPokemonDetails(name);
            setSinglePokemon(response);
            setPokemonType(response?.types[0]?.type.name)
            setNumberOfGame(response?.game_indices)
            setImage(response?.sprites["front_default"])
        };
        fetchPokemonDetails();
    }, [name]);





    return (
        <>
            <div className="w-full md:w-auto mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 h-screen pt-10 bg-slate-100">
                <div className="flex justify-center flex-col items-center">
                    <p className="text-2xl">{singlePokemon?.name?.toUpperCase()}</p>
                    <div className="flex items-center justify-center  w-64 h-64">
                        <img
                            className="object-contain h-48 w-96"
                            src={image}
                            alt={singlePokemon?.name}
                        />
                    </div>
                </div>
                <div className="flex">
                    <ul className="flex flex-grow flex-col justify-center items-center">
                        <li className="text-4xl w-full "> Type: {pokemonType} </li>
                        <li className="text-4xl w-full"> Height: {singlePokemon.height} </li>
                        <li className="text-4xl w-full">No: of Games: {numberOfGame.length} </li>
                        <li className="text-4xl w-full">Order: {singlePokemon.order}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PokemonDetails