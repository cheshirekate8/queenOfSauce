import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewFridgeForm from './NewFridgeForm';

function NewFridgeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <i
        className="fas fa-plus iconz"
        onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewFridgeForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default NewFridgeModal;
