import React, { useState } from 'react'
export default function RandomPokemon({ name, id, effect }) {

    const [error, setError] = useState('System cannot find the image:(')

    return (
        <div className="pokemon-field">

            <h2 className="pokemon-name">{name}</h2>
            <div className="row">
                <img src={"https://pokeres.bastionbot.org/images/pokemon/" + id + ".png" ? `https://pokeres.bastionbot.org/images/pokemon/${id}.png` : "https://avatanplus.com/files/resources/original/5aae7d3da9fb816239993900.png"} alt="pokemon" className="pokemon-photo" />

            </div>



        </div>
    )
}
