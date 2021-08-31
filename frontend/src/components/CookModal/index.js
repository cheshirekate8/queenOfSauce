import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CookForm from './CookForm';

function CookModal({recipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p className="iconz" onClick={() => setShowModal(true)}>Cook Me!</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CookForm setShowModal={setShowModal} recipe={recipe}/>
        </Modal>
      )}
    </>
  );
}

export default CookModal;
