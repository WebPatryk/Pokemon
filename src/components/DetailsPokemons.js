import React, { useState, useEffect } from 'react';
import '../styles/DetailsPokemon.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import abilities from '../images/abilities.png';
import height from '../images/height.png';
import weight from '../images/weight.png';

export default function DetailsPokemons(props) {
	const [pokemonsData, setPokemnonsData] = useState([]);
	const [describtion, setDescribtion] = useState('');

	useEffect(() => {
		async function fetchPokemon() {
			const { id } = props.match.params;

			const pokemonMainURl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
			const pokemonDetailsURL = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

			try {
				const BasicPokeonInfo = await axios.get(pokemonMainURl);
				const BasicPokeonInfoResponse = await BasicPokeonInfo.data;
				setPokemnonsData(BasicPokeonInfoResponse);
			} catch {
				throw new Error('Something was wrong, fetch incomplited');
			}
			try {
				const PokemonsDetails = await axios.get(pokemonDetailsURL);
				const PokemonsDetailsResponse = await PokemonsDetails.data;

				let describtionPokemon = '';

				PokemonsDetailsResponse.flavor_text_entries.some((flavor) => {
					if (flavor.language.name === 'en') {
						describtionPokemon = flavor.flavor_text;
					}
					return describtionPokemon;
				});
				setDescribtion(describtionPokemon);
			} catch {
				throw new Error('Something was wrong, fetch incomplited');
			}
		}
		fetchPokemon();
	}, [props.match.params]);

	const { id } = props.match.params;

	const heightPokemon = pokemonsData.height / 10;
	const weightPokemon = pokemonsData.weight / 10;

	if (!pokemonsData.abilities && !pokemonsData.stats) {
		return <span>Loading...</span>;
	}

	//Destructuring assignment
	const [firstAbility] = pokemonsData.abilities;
	const [speed, , , defence, attack, hp] = pokemonsData.stats;

	//Destructuring abilities
	const abilityName = firstAbility.ability.name;
	const pokemonName = pokemonsData.name;
	const pokemonPhoto = 'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png';
	const attactQuantity = attack.base_stat;
	const hpQuantity = hp.base_stat;
	const speedQuantity = speed.base_stat;
	const defenceQuantity = defence.base_stat;

	const AbilityFirstLowerUpp = abilityName
		.split(' ')
		.map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1));

	return (
		<div className="full-info">
			<Header />
			<div className="detailsPokemon-container">
				<div className="leftDetails">
					<h1>{pokemonName}</h1>
					<div className="photoDetials">
						<img src={pokemonPhoto} alt={pokemonName} />
					</div>
				</div>

				<div className="rightDetails">
					<div className="main-abilities">
						<div className="abilities-content">
							<h1>Basic skill</h1>
							<div className="main-abilities-info">
								<img src={abilities} alt="abilities" className="logo-abilities" />
								<h2>{AbilityFirstLowerUpp}</h2>
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
						{
							<div className="fourth-abilities">
								<h1>Attack</h1>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-valuenow={attactQuantity}
										aria-valuemin={0}
										aria-valuemax={100}
										style={{
											width: `${attactQuantity}%`,
											backgroundColor: '#E88C99'
										}}
									>
										{attactQuantity}
									</div>
								</div>
							</div>
						}

						{
							<div className="fourth-abilities">
								<h1>HP</h1>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-valuenow={hpQuantity}
										aria-valuemin={0}
										aria-valuemax={100}
										style={{
											width: `${hpQuantity}%`,
											backgroundColor: '#E88C99'
										}}
									>
										{hpQuantity}
									</div>
								</div>
							</div>
						}

						{
							<div className="fourth-abilities">
								<h1>Speed</h1>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-valuenow={speedQuantity}
										aria-valuemin={0}
										aria-valuemax={100}
										style={{
											width: `${speedQuantity}%`,
											backgroundColor: '#E88C99'
										}}
									>
										{speedQuantity}
									</div>
								</div>
							</div>
						}

						{
							<div className="fourth-abilities">
								<h1>Deffence</h1>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-valuenow={defenceQuantity}
										aria-valuemin={0}
										aria-valuemax={100}
										style={{
											width: `${defenceQuantity}%`,
											backgroundColor: '#E88C99'
										}}
									>
										{defenceQuantity}
									</div>
								</div>
							</div>
						}

						<div className="describtion-details">
							<h2>Describtion</h2>
							<h2>{describtion}</h2>
						</div>
					</div>

					<Link to="/" style={{ textDecoration: 'none', width: '220px' }}>
						<div className="back">
							<i className="fas fa-arrow-circle-left"></i>
							<span>Back To HomePage</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
