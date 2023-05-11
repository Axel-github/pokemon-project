//компонент, который создает карточки через цикл

import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
import { getPokemonList } from "../../api/getPokemonList";
import "./PokemonDataGrid.css";
//import { pokemons_mock, pokemons_mock2 } from "../helpers/constants";

// function PokemonDataGrid() {
const PokemonDataGrid = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList(50, 0).then(response => { setPokemons(response.data.results) })
  }, []);



  return (
    <div className="pokemon-data-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonDataGrid;