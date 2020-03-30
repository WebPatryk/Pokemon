import React from 'react'
import twoPokemons from '../images/2pokemons.gif';
import Typed from "react-typed";

const chooseLines = [
    `↑ Choose one of us ↑`,
    `↑Click the button below ↑`,

];


export default function ChooseLoading() {


    const photoStyle = {
        display: "block",
        margin: "0 auto"

    };

    const typedChoose = {
        fontSize: "2rem",
        textAlign: "center",
        marginTop: "10rem",
        display: "block",
        marginBottom: "4rem"

    };

    return (
        <>
            <Typed strings={chooseLines} typeSpeed={50} loop={true} style={typedChoose} />
            <img src={twoPokemons} alt="pokemon" style={photoStyle} />
        </>
    )
}
