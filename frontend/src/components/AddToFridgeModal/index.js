import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddToFridgeForm from "./AddToFridgeForm";
import './AddToFridge.css';
import '../KitchenComponent/Kitchen.css'

function AddToFridgeModal({currIngredient}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <i className="fas fa-plus iconz" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddToFridgeForm setShowModal={setShowModal} currIngredient={currIngredient}/>
        </Modal>
      )}
    </>
  );
}

export default AddToFridgeModal;
