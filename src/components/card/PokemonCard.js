import React, { useState } from "react";
import "./card.css";
import Modal from '../modal/modal';

const PokemonCard = ({ pokemon, setPokemon, setOpen }) => {

  const [name] = useState(pokemon.name);
  //const [weight] = useState(pokemon.weight);
  const [spriteUrl] = useState(pokemon.spriteUrl);
  // const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(true);
    setPokemon(pokemon);
  };

  return (
    <>
      <div className="card" onClick={() => handleCloseModal()}>
        <div className="card-body">
          <img className="card-body-image" src={spriteUrl} alt='pokemon' />
        </div>
        <div className="card-footer">
          <span className="card-footer-title">{name}</span>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
