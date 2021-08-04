import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditFridgeForm from './EditFridgeForm';

function EditFridgeModal({currFridge}) {
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
          <EditFridgeForm currFridge={currFridge} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditFridgeModal;
