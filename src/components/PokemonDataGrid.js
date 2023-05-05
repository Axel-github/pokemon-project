//компонент, который создает карточки через цикл

import React, { useState, useEffect } from "react";
import PokemonCard from "./card/PokemonCard";
import { makeRequest } from "../api/request";

function PokemonDataGrid() {
  const bulba = {
    name: '21312',
    description: '1231',
  }
  const [pokemons, setPokemons] = useState([bulba]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = makeRequest(10, 0);
        setPokemons(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonDataGrid;




// function PokemonDataGrid() {
 


//   return (
//     <div>
//       {pokemons.map((pokemon) => (
//         <PokemonCard pokemon={pokemon} />
//       ))}
//     </div>
//   );
// }

// export default PokemonDataGrid;




//// без props
//useState
//useEffect (запрос и передавать в state результат)