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
            {/* Parent Container */}
            <div className="w-full md:w-auto mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 h-screen pt-10 bg-red-500 ">

                { /* Left Container for Image */}
                <div className="flex justify-center bg-red-400">
                    <img className='object-contain' src={image} alt={singlePokemon?.name} className="card-img-top" />
                </div>
                {/*Right Container for details  */}
                <div className="flex justify-center bg-red-300">
                    <h5 className="card-title">Name: {singlePokemon?.name}</h5>
                </div>
            </div>
            {/* <div className="w-[1200px] mx-auto bg-red-500 ">
                <div className="flex justify-center w-full bg-red-400 " >
                    <div className="flex justify-center">
                        <img src={image} alt={singlePokemon?.name} className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {singlePokemon?.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Type: {pokemonType} </li>
                        <li className="list-group-item"> Height: {singlePokemon.height} </li>
                        <li className="list-group-item">No: of Games: {numberOfGame.length} </li>
                        <li className="list-group-item">Order: {singlePokemon.order}</li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}

export default PokemonDetails