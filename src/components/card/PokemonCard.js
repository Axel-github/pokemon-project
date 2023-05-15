//компонент, который отрисовывает инфу про покемонов

import React, { useState} from "react";
import "./card.css";



function PokemonCard(props) {

  const [name] = useState(props.pokemon.name);
  const [spriteUrl] = useState(props.pokemon.spriteUrl);
  // const [url, setUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");





  return (

    <div className="card">
      <div className="card-body">
        <img className="card-body-image" src={spriteUrl} alt='pokemon' />
      </div>
      <div className="card-footer">
        <span className="card-footer-title">{name}</span>
      </div>
    </div>
  );
}

export default PokemonCard;

