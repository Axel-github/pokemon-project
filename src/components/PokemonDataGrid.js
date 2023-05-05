//компонент, который создает карточки через цикл

import React from "react";
import PokemonCard from "./card/PokemonCard";

function PokemonDataGrid(props) {
  // const { pokemons } = props;
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonDataGrid;