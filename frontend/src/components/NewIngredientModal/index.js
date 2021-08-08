import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewIngredientForm from './NewIngredientForm';

function NewIngredientModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fas fa-plus iconz"></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewIngredientForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default NewIngredientModal;
