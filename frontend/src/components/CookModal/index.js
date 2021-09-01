import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CookForm from './CookForm';
import '../RecipesComponent/Recipes.css'

function CookModal({recipe}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='cookBtn' onClick={() => setShowModal(true)}>Cook Me!</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CookForm setShowModal={setShowModal} recipe={recipe}/>
        </Modal>
      )}
    </>
  );
}

export default CookModal;
