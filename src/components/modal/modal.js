import React from "react";
import ReactModal from 'react-modal';
import getPokemonSprite from "../../helpers/getPokemonSprite";

//import { getPokemonList } from "../../api/getPokemonList";

const Modal = ({ isOpen, handleCloseModal, pokemon }) => {
  //const test = useState('test');

  return (

    <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} contentLabel="Модальное окно" appElement={document.querySelector('#root')}>
      <h3>{pokemon?.name ?? 'Pokemon name not available'}</h3>
      <h3>{pokemon?.id ?? 'Pokemon ID not available'}</h3>
      <img className="modal-body-image" src={getPokemonSprite(pokemon?.id, 'svg')} alt='pokemon' />
      <h3>{console.log('test')}</h3>
      <h3>{pokemon?.weight}</h3>
      {/* {children} */}
      <button onClick={handleCloseModal}>Закрыть</button>

    </ReactModal>
  );
};

export default Modal;