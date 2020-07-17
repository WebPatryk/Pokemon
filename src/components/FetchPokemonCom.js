import React from 'react';

export default function FetchPokemonCom(props) {
	return (
		<div className="pokemon-random" onClick={props.random}>
			<button className="animation-btn">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<div className="text">Random your pokemon</div>
			</button>
		</div>
	);
}
