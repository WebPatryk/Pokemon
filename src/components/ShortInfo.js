import React from 'react';
import '../styles/short-name.css';
import { Link } from 'react-router-dom';

export default function ShortInfo({ height, weight, ability, id }) {


    if (!weight) {
        return <p>Loading...</p>
    }

    const weightPokemon = weight / 10
    const heightPokemon = height / 10


    return (
        <div className="short-name-container">


            <div className="center-info">
                <div className="one-info">
                    <i class="fas fa-text-height"></i>
                    <p >Height:</p>
                    <p className="info-details">{heightPokemon} m</p>
                </div>
                <div className="two-info">
                    <i class="fas fa-weight"></i>
                    <p >Weight:</p>
                    <p className="info-details">{weightPokemon} kg</p>
                </div>
                <div className="three-info">
                    <i class="fas fa-award"></i>
                    <p >Main ability:</p>
                    <p className="info-details">{ability}</p>
                </div>


            </div>


            <div className="button-container">
                <Link to={`/pokemon/${id}`} className="buttonsDetails" style={{ textDecoration: "none", width: "500px" }}>More information <i class="fas fa-arrow-right"></i></Link>
            </div>

        </div>

    )
}
