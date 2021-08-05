import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditIngredientForm from './EditIngredientForm';

function EditIngredientModal({currIngredient}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <i className="fas fa-edit iconz" onClick={() => setShowModal(true)}>
        </i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditIngredientForm currIngredient={currIngredient} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditIngredientModal;
