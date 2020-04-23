import React from 'react';
import person from '../images/person.png';
import cloud from '../images/cloud.png';
import gifPokemon from '../images/gifPokemon.gif';
import movePokemon from '../images/movePokemon.gif';
import '../styles/Welcome.css';
import Random from './Random';
import Header from './Header';
import Typed from "react-typed";

const textLines = [
    `Hello survivor`,
    `Welcome in a pokemon world`,
    `Let's start your adveture`,
    `Choose your pokemon`,
    `ENJOY!`
];

export default function Welcome() {
    return (
        <>
            <Header />
            <div className="welcome-container">
                <img src={gifPokemon} alt="pokemon" className="gif-pokemon" />
                <div className="personality">
                    <img src={person} alt="person" className="person" />
                    <div className="cloud">
                        <img src={cloud} alt="cloud" className="cloud-img" />
                        <Typed strings={textLines} typeSpeed={50} className="cloud-text" loop={true} />
                    </div>
                </div>
                <img src={movePokemon} alt="movePokemon" className="move-pokemon" />
            </div>
            <Random />
        </>

    );
}
