import React from "react";
import ReactModal from 'react-modal';
//import { getPokemonList } from "../../api/getPokemonList";

const Modal = ({ isOpen, handleCloseModal, pokemon }) => {
  //const test = useState('test');

  return (

    <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} contentLabel="Модальное окно">
      <h3>{pokemon?.name ?? 'Pokemon name not available'}</h3>
      <h3>{pokemon?.id ?? 'Pokemon ID not available'}</h3>

      <h3>{console.log('test')}</h3>

      {/* {children} */}
      <button onClick={handleCloseModal}>Закрыть</button>

    </ReactModal>
  );
};

export default Modal;