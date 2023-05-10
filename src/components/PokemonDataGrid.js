//компонент, который создает карточки через цикл

import React, { useState, useEffect } from "react";
import PokemonCard from "./card/PokemonCard";
import { getPokemonList } from "../api/getPokemonList";
//import { pokemons_mock, pokemons_mock2 } from "../helpers/constants";

// function PokemonDataGrid() {
const PokemonDataGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemonList(10, 0).then(response => { setPokemonData(response.data.results) })
  }, []);



  return (
    <div className="pokemon_data_grid_main row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 d-flex flex-wrap">
      {pokemonData.map((pokemon) => (
        <PokemonCard card mb-3 key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonDataGrid;