import React from 'react'
import person from '../images/person.png';
import cloud from '../images/cloud.png';
// import ball from '../images/ball.png';
import gifPokemon from '../images/gifPokemon.gif';
import movePokemon from '../images/movePokemon.gif';
import '../styles/Welcome.css';
import Random from './Random'
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
                <img src={person} alt="person" className="person" />
                <div className="cloud">
                    <img src={cloud} alt="cloud" />
                    <Typed strings={textLines} typeSpeed={50} className="cloud-text" loop={true} />
                </div>
                {/* 
            <img src={ball} alt="ball" className="ball" id="ball1" />
            <img src={ball} alt="ball" className="ball" id="ball2" />
            <img src={ball} alt="ball" className="ball" id="ball3" />
            <img src={ball} alt="ball" className="ball" id="ball4" /> */}
                <img src={movePokemon} alt="movePokemon" className="move-pokemon" />

            </div>
            <Random />
        </>

    )
}
