import React from 'react';
import '../styles/RandomPokemon.css';


export default function RandomPokemon({ name, id }) {



    return (
        <div className="pokemon-field">

            <h2 className="pokemon-name">{name}</h2>
            <div className="row">
                <img src={"https://pokeres.bastionbot.org/images/pokemon/" + id + ".png"} alt="pokemon" className="pokemon-photo" />

            </div>



        </div>
    );
}
