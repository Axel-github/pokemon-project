//компонент, который отрисовывает инфу про покемонов

import React from "react";
//import PokemonDataGrid from "../PokemonDataGrid";
import "./card.css";





function PokemonCard(props) {
  const [name] = React.useState(props.pokemon.name);



  return (
    <div className="card">
      <h2>{name}</h2>

      <p>{props.pokemon.description}</p>
    </div>
  );
}

export default PokemonCard;

