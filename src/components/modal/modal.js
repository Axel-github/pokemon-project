import React from "react";
import ReactModal from 'react-modal';
import getPokemonSprite from "../../helpers/getPokemonSprite";
import "./modal.css"

const Modal = ({ isOpen, handleCloseModal, pokemon }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} contentLabel="Модальное окно" appElement={document.querySelector('#root')} 
    className={{
      overlay: 'modal-overlay',
      content: 'modal-content'
    }}
    overlayClassName="modal-overlay" // добавьте эту строку
    >
      <div className="modal">
        <div className="modal-card">
          <div className="modal-header">
            <h3>{pokemon?.name ? pokemon.name : 'Pokemon name not available'}</h3>
          </div>
          <div className="modal-body">
            <img className="modal-image" src={getPokemonSprite(pokemon?.id, 'svg')} alt='pokemon' />
            <h3>ID:{pokemon?.id ? pokemon.id : 'Pokemon ID not available'}</h3>
            <h3>Weight:{pokemon?.weight}</h3>
          </div>
          <div className="modal-footer">
            <button onClick={() => handleCloseModal(false)}>Закрыть</button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
