//компонент, который создает карточки через цикл

import React, { useState, useEffect } from "react";
import PokemonCard from "./card/PokemonCard";
import { makeRequest } from "../api/request";
//import { pokemons_mock, pokemons_mock2 } from "../helpers/constants";

// function PokemonDataGrid() {
const PokemonDataGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    makeRequest(10, 0).then(response => { setPokemonData(response.data.results) })
  }, []);



  return (
    <div>
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonDataGrid;