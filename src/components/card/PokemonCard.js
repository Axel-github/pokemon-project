import React, { useEffect, useState } from "react";
import "./card.css";
import getPokemonSprite from "../../helpers/getPokemonSprite";


const PokemonCard = ({ pokemon, setPokemon, setOpen }) => {

  const [name] = useState(pokemon.name);
  //const [weight] = useState(pokemon.weight);
  const [spriteUrl, setSpriteUrl] = useState(getPokemonSprite(0, 'static'));
  // const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(true);
    setPokemon(pokemon);
  };
  useEffect(() => {
    setSpriteUrl(pokemon.spriteUrl);
  }, [pokemon]);

  return (

    <div className="card" onClick={() => handleCloseModal()}>
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
