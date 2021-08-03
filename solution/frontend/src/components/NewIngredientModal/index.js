import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewIngredientForm from './NewIngredientForm';

function NewIngredientModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className='logBtns'
        onClick={() => setShowModal(true)}
        >
        <i className="fas fa-plus"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewIngredientForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default NewIngredientModal;
