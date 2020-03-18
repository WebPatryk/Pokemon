import React, { useState } from 'react';
import '../styles/Random.css';
import RandomPokemon from './RandomPokemon';
import ShortInfo from './ShortInfo';


export default function Random() {

    const [pokemons, setPokemons] = useState({})
    const [pokemonsItems, setPokemonsItems] = useState({})
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     fetchPokemon();
    // }, [])


    function randomID() {
        const min = Math.floor(1);
        const max = Math.floor(800);
        return Math.floor(Math.random() * (max - min) + 1) + min

    }



    const fetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomID());
        const data = await response.json()
        setPokemons(data)
        setActive(true)



        const response2 = await fetch('https://pokeapi.co/api/v2/item/' + randomID())
        const data2 = await response2.json();
        setPokemonsItems(data2)
        // console.log(data2.effect_entries[0].effect);

        setLoading(false)
    }

    // console.log(pokemonsItems.effect_entries[0]);

    console.log(pokemons);
    return (



        <div className="random-container">
            <button className="btn-random-pokemon" onClick={fetchPokemon}>Random your pokemon</button>
            <div className="center">

                {active && < RandomPokemon name={pokemons.name} id={pokemons.id} />}

                {loading ? "" : <ShortInfo describtion={pokemonsItems.effect_entries[0].effect} height={pokemons.height} weight={pokemons.weight} ability={pokemons.abilities[0].ability.name} id={pokemons.id} />}

            </div>

        </div>
    )
}
