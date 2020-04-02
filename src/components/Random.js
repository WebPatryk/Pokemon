import React, { useState } from 'react';
import '../styles/Random.css';
import Loader from 'react-loader-spinner'
import RandomPokemon from './RandomPokemon';
import ShortInfo from './ShortInfo';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ChooseLoading from './ChooseLoading';



export default function Random() {

    const [pokemons, setPokemons] = useState({})
    const [pokemonsItems, setPokemonsItems] = useState({})
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
    const [loadingg, setLoadingg] = useState(false)
    const [space, setSpace] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [failed, setFailed] = useState(false)




    // useEffect(() => {
    //     fetchPokemon();
    // }, [])


    function randomID() {
        const min = Math.floor(1);
        const max = Math.floor(800);
        return Math.floor(Math.random() * (max - min) + 1) + min

    }



    const fetchPokemon = () => {
        setTimeout(() => {
            pokemonsFetch()
            fetchPokemons2()
            setLoadingg(true)

        }, 2000)

        setTimeout(() => {
            setLoading2(true)
        }, 3500)

        async function pokemonsFetch() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomID());
                const data = await response.json()
                setPokemons(data)
                setLoading(false)

            }
            catch (err) {
                console.log(err);
            }

            // setLoadingg(true)
        }


        setActive(true)
        // setLoadingg(true)
        setLoading(true)

        // setTimeout(() => {
        //     setPokemons(data)
        //     setSpace(false)
        //     setLoading(false)
        //     setImageLoading(false)
        // }, 2500)



        async function fetchPokemons2() {
            try {
                const response2 = await fetch('https://pokeapi.co/api/v2/item/' + randomID())
                const data2 = await response2.json();
                setPokemonsItems(data2)

            }
            catch (err) {
                console.log(err);
            }

            // console.log(data2.effect_entries[0].effect);
        }






    }



    console.log(pokemonsItems);


    function failedFetch() {
        console.log('error');
        setFailed(true)
    }

    return (



        <div className="random-container">

            {/* <button className="btn-random-pokemon" onClick={fetchPokemon}>Random your pokemon</button> */}

            <div className="pokemon-random" onClick={fetchPokemon}>
                <button className="animation-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="text">Random your pokemon</div>
                </button>

            </div>



            <div className="center">


                {loading ? <Loader type="TailSpin" color="#somecolor" height={150} width={150} color="black" className="loading-animation" />

                    :
                    (
                        <div className="random-screen">
                            {loadingg ? < RandomPokemon name={pokemons.name} id={pokemons.id} /> : <ChooseLoading />}

                            <div>
                                {loading2 && <ShortInfo describtion={pokemonsItems.effect_entries[0].effect} height={pokemons.height} weight={pokemons.weight} ability={pokemons.abilities[0].ability.name} id={pokemons.id} onError={failedFetch} />}
                            </div>



                        </div>
                    )}

            </div>

        </div>
    )
}
