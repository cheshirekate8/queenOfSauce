import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditFridgeForm from "./EditFridgeForm";

function EditFridgeModal({ currFridge }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fas fa-edit iconz" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditFridgeForm currFridge={currFridge} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditFridgeModal;
