import React, { useState } from "react";
import "./card.css";
import Modal from '../modal/modal';

const PokemonCard = ({ pokemon }) => {

  const [name] = useState(pokemon.name);
  //const [weight] = useState(pokemon.weight);
  const [spriteUrl] = useState(pokemon.spriteUrl);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="card" onClick={() => setIsOpen(true)}>
        <div className="card-body">
          <img className="card-body-image" src={spriteUrl} alt='pokemon' />
        </div>
        <div className="card-footer">
          <span className="card-footer-title">{name}</span>
        </div>
      </div>
      <Modal pokemon={pokemon} isOpen={isOpen} handleCloseModal={handleCloseModal} >

      </Modal>
    </>
  );
}

export default PokemonCard;
