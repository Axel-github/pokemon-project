//компонент, который создает карточки через цикл

import React from "react";
import PokemonCard from "./card/PokemonCard";

function PokemonDataGrid(props) {
 // без props
//useState
//useEffect (запрос и передавать в state результат)
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonDataGrid;

//