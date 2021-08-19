import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuantityForm from './EditQuantityForm';

function EditQuantityModal({currIngredient}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <i className="fas fa-plus iconz" onClick={() => setShowModal(true)}></i> */}
      <div className="ingCount" onClick={() => setShowModal(true)}>{currIngredient.quantity}</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditQuantityForm setShowModal={setShowModal} currIngredient={currIngredient}/>
        </Modal>
      )}
    </>
  );
}

export default EditQuantityModal;
