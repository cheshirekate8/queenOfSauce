import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewFridgeForm from './NewFridgeForm';

function NewFridgeModal() {
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
          <NewFridgeForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default NewFridgeModal;