import React, { useState, useEffect } from 'react';
import "../styles/DetailsPokemon.css";
import Header from './Header';
import { Link } from 'react-router-dom';


export default function DetailsPokemons(props) {

    const [pokemonsData, setPokemnonsData] = useState([]);

    useEffect(() => {

        const { id } = props.match.params;
        const pokemonURl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        // const abilitiesURL = `pokemon-species/${id}`

        const fetchPokemon = async () => {
            const response = await fetch(pokemonURl)
            const data = await response.json()
            setPokemnonsData(data)
        }

        fetchPokemon()
    })


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
                    <div className="titleDetails">
                        <h1>Main abilites</h1>
                    </div>
                    <div className="esentailyStats">
                        <div className="firstStats">
                            <p>Helth:</p>
                            <div className="stats"></div>
                        </div>
                        <div className="secondStats">
                            <p>Attack:</p>
                            <div className="stats"></div>
                        </div>
                    </div>

                    <div className="full-abilites">
                        <div className="first-abilities">
                            <h1>HP</h1>
                            <div className="distance"><span className="bar">65%</span></div>
                        </div>

                        <div className="second-abilities">
                            <h1>Attack</h1>
                            <div className="distance"><span className="bar"></span></div>
                        </div>

                        <div className="third-abilities">
                            <h1>Defence</h1>
                            <div className="distance"><span className="bar"></span></div>
                        </div>

                        <div className="fourth-abilities">
                            <h1>Height</h1>
                            <div className="distance"><span className="bar"></span></div>
                        </div>

                        <div className="fifth-abilities">
                            <h1>Weight</h1>
                            <div className="distance"><span className="bar"></span></div>
                        </div>

                        <div className="sixth-abilities">
                            <h1>Speed</h1>
                            <div className="distance"><span className="bar"></span></div>
                        </div>
                        <div className="describtion-details">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel labore saepe fuga atque? Ullam saepe impedit, modi repudiandae ex cum. Explicabo ab deserunt nobis nam facere suscipit eos corporis.</h2>
                        </div>

                        <Link to="/" style={{ textDecoration: "none", width: "220px" }}><div className="back">
                            <i class="fas fa-arrow-circle-left"></i>
                            <span>Back To HomePage</span>
                        </div>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}
