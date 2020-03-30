import React, { useState, useEffect } from 'react';
import "../styles/DetailsPokemon.css";
import Header from './Header';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import abilities from '../images/abilities.png'
import height from '../images/height.png'
import weight from '../images/weight.png'
import axios from 'axios';


export default function DetailsPokemons(props) {

    const [pokemonsData, setPokemnonsData] = useState([]);
    const [pokemonsData2, setPokemnonsData2] = useState([]);
    const [states, setStates] = useState(true)
    const [abilitess, setAbilitiess] = useState(true)
    const [activeLoaing, setActiveLoading] = useState(false);
    const [species, setSpecies] = useState([])
    const [describtion, setDescribtion] = useState('');

    useEffect(() => {
        async function fetchPokemon() {
            const { id } = props.match.params;
            const pokemonURl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
            // const abilitiesURL = `pokemon-species/${id}`
            const fetch2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`;


            axios.get(pokemonURl)
                .then(res => {
                    const persons = res.data;
                    setPokemnonsData(persons)
                })




            fetch(fetch2)
                .then(res => res.json())
                .then(res => {
                    let describe = '';

                    res.flavor_text_entries.some(flavor => {
                        if (flavor.language.name === 'en') {
                            describe = flavor.flavor_text;

                        }

                        return describe


                    })
                    setDescribtion(describe)


                })




            // const name = resPok.data.name;
            // console.log(name);


        }
        fetchPokemon()

        // fetch(pokemonURl)
        //     .then(res => res.json())
        //     .then(data => setPokemnonsData(data))

        setStates(false)
        setAbilitiess(false)












        // fetch(fetch2)
        //     .then(res => res.json())

        //     .then(data => setSpecies(data.flavor_text_entries[1].flavor_text))


        // pokemonsData.stats.map(stat => {
        //     let { hp, attack, defense, speed, specialAttack } = '';

        //     switch (stat.stat.name) {
        //         case 'hp':
        //             hp = stat['base_stat'];
        //             break;
        //         case 'attack':
        //             attack = stat['base_stat'];
        //             break;
        //         default:
        //     }


        // })



    }, [])

    console.log(species);

    // setTimeout(() => {
    //     console.log(pokemonsData.abilities[0].ability.name);
    // }, 3000)

    // setTimeout(() => {
    //     console.log(pokemonsData.stats.map(stat => stat.stat.name));
    // }, 2000)







    // pokemonsData.stats.map(stat => {

    //     console.log(stat.stat.name);
    //     switch (stat.stat.name) {
    //         case 'hp':
    //             hp = stat['base_stat'];
    //             break;
    //         case 'attack':
    //             attack = stat['base_stat'];
    //             break;

    //     }


    // })

    console.log(pokemonsData);


    const heightPokemon = pokemonsData.height / 10;
    const weightPokemon = pokemonsData.weight / 10;


    const { id } = props.match.params;
    return (
        <div style={{ height: "75vh" }}>
            <Header />
            <div className="detailsPokemon-container">

                <div className="leftDetails">
                    <h1>{pokemonsData.name}</h1>
                    <div className="photoDetials">
                        <img src={'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png'} alt="pokemon" />
                    </div>

                </div>



                <div className="rightDetails">


                    <div className="main-abilities">

                        <div className="abilities-content">
                            <h1>Basic skill</h1>
                            <div className="main-abilities-info">
                                <img src={abilities} alt="abilities" className="logo-abilities" />
                                <h2>{pokemonsData.abilities && pokemonsData.abilities[0].ability.name}</h2>

                            </div>
                        </div>

                        <div className="abilities-content">
                            <h1>Weight</h1>
                            <div className="main-abilities-info">
                                <img src={weight} alt="weight" className="logo-abilities" />
                                <h2>{weightPokemon} KG</h2>
                            </div>
                        </div>

                        <div className="abilities-content">
                            <h1>Height</h1>
                            <div className="main-abilities-info">
                                <img src={height} alt="height" className="logo-abilities" />
                                <h2>{heightPokemon} m</h2>
                            </div>
                        </div>
                    </div>



                    <div className="full-abilites">


                        {/* {pokemonsData.stats && JSON.stringify(pokemonsData.stats[5].base_stat)} */}

                        {pokemonsData.stats &&
                            <div className="fourth-abilities">
                                <h1>Attack</h1>
                                <div className='progress'>
                                    <div className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: `${pokemonsData.stats[4].base_stat}%`, backgroundColor: "#E88C99" }}>
                                        {pokemonsData.stats[4].base_stat}
                                    </div>
                                </div>
                            </div>
                        }



                        {pokemonsData.stats &&
                            <div className="fourth-abilities">
                                <h1>HP</h1>
                                <div className='progress'>
                                    <div className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: `${pokemonsData.stats[5].base_stat}%`, backgroundColor: "#E88C99" }}>
                                        {pokemonsData.stats[5].base_stat}
                                    </div>
                                </div>
                            </div>
                        }

                        {pokemonsData.stats &&
                            <div className="fourth-abilities">
                                <h1>Speed</h1>
                                <div className='progress'>
                                    <div className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: `${pokemonsData.stats[0].base_stat}%`, backgroundColor: "#E88C99" }}>
                                        {pokemonsData.stats[0].base_stat}
                                    </div>
                                </div>
                            </div>
                        }

                        {pokemonsData.stats &&
                            <div className="fourth-abilities">
                                <h1>Deffence</h1>
                                <div className='progress'>
                                    <div className='progress-bar'
                                        role='progressbar'
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: `${pokemonsData.stats[3].base_stat}%`, backgroundColor: "#E88C99" }}>
                                        {pokemonsData.stats[3].base_stat}
                                    </div>
                                </div>
                            </div>
                        }







                        <div className="describtion-details">
                            <h2>Describtion</h2>
                            <h2>{describtion}</h2>
                        </div>
                    </div>

                    <Link to="/" style={{ textDecoration: "none", width: "220px" }}><div className="back">
                        <i class="fas fa-arrow-circle-left"></i>
                        <span>Back To HomePage</span>
                    </div>
                    </Link>
                </div>


            </div>
        </div>


    )
}
