//компонент, который создает карточки через цикл

import React, { useState, useEffect } from "react";
import PokemonCard from "./card/PokemonCard";
import { makeRequest } from "../api/request";
import { pokemons_mock, pokemons_mock2 } from "../helpers/constants";
function PokemonDataGrid() {
  
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    makeRequest(10,0).then(response => {setPokemons(response.data.results)})
    // setPokemons(pokemons_from_api)
  }, []);

  return (
    <div>
      
      {
        pokemons ? (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))
        ) : (<p>pokemons нету((</p>)
      
      }
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