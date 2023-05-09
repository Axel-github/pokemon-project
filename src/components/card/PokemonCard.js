//компонент, который отрисовывает инфу про покемонов

import React from "react";
import "./card.css";


function PokemonCard(props) {
  const [name] = React.useState(props.pokemon.name);

  return (
    // <div className="card">
    //   <h2>{name}</h2>

    //   <p>{props.pokemon.description}</p>
    // </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <a class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default PokemonCard;

