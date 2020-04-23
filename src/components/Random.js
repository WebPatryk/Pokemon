import React, { useState, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../styles/Random.css';
import RandomPokemon from './RandomPokemon';
import ShortInfo from './ShortInfo';

const FetchPokemonCom = lazy(() => import('./FetchPokemonCom'));
const ChooseLoading = lazy(() => import('./ChooseLoading'));


export default function Random() {

    const [pokemons, setPokemons] = useState([]);
    const [loadingPhotoName, setLoadingPhotoName] = useState(false);
    const [loadingRandom, setLoadingRandom] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);



    function randomID() {
        const min = Math.floor(1);
        const max = Math.floor(800);
        return Math.floor(Math.random() * (max - min) + 1) + min;

    }

    const fetchPokemonWithTimeOut = () => {
        setTimeout(() => {
            pokemonsFetch();
            setLoadingRandom(true);
            setLoadingDetails(true);

        }, 1500);


        async function pokemonsFetch() {
            try {
                const RandomPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomID());
                const RandomPokemonData = await RandomPokemon.json();

                setPokemons(RandomPokemonData);
                setLoadingPhotoName(false);

            }
            catch (err) {
                console.log(err);
            }
        }

        setLoadingPhotoName(true);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="random-container">
                <FetchPokemonCom random={fetchPokemonWithTimeOut} />
                <div className="center">
                    {loadingPhotoName ? <Loader type="TailSpin" color="black" height={150} width={150} className="loading-animation" />
                        :
                        (
                            <div className="random-screen">
                                {loadingRandom ? < RandomPokemon name={pokemons.name} id={pokemons.id} /> : <ChooseLoading />}

                                <div>
                                    {loadingDetails && <ShortInfo height={pokemons.height} weight={pokemons.weight} id={pokemons.id} ability={pokemons.abilities[0].ability.name} />}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </Suspense>
    );
}
