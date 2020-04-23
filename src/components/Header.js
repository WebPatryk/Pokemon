import React from 'react';
import '../styles/Header.css';
import fourPokemons from '../images/fourPokemons.png';
import Pikachu from '../images/Pikachu.png';

function Header() {
    return (
        <div className="header-container">
            <img src={fourPokemons} alt="pokemon" className="four-pokemons" />
            <div>
                <h1>Pokemon App</h1>
                <h3>Choose your representative pokemon</h3>
            </div>
            <img src={Pikachu} alt="pokemon Pikatchu" className="pikachu" />
        </div>
    )
}
export default Header;