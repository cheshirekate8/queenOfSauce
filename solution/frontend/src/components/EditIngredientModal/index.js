import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditIngredientForm from './EditIngredientForm';

function EditIngredientModal({currIngredient}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className='logBtns'
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-edit fridgeBtns">
        </i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditIngredientForm currIngredient={currIngredient}/>
        </Modal>
      )}
    </>
  );
}

export default EditIngredientModal;
