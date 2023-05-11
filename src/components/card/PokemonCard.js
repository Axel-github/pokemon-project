//компонент, который отрисовывает инфу про покемонов

import React, { useState, useEffect } from "react";
import "./card.css";
import { getPokemonInfo } from "../../api/getPokemonInfo";


function PokemonCard(props) {

  const [name] = useState(props.pokemon.name);
  const [url, setUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png");



  useEffect(() => {
    getPokemonInfo(name).then(response => { setUrl(response.data.sprites.front_default) })
  }, []);

  return (
    // <div className="card">
    //   <h2>{name}</h2>

    //   <p>{props.pokemon.description}</p>
    // </div>


    <div className="card">
      <img className="pokemon-card-image" src={url} />
      <h5 className="card-title">{name}</h5>
    </div>
  );
}

export default PokemonCard;

