import { useState } from "react";
import Modal from "./modal";
import './modal.css'

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

 function onClose(){
  setShowModalPopup(false)
 }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Model Popup</button>
      {showModalPopup && <Modal onClose={onClose} body={<div> some body</div>} />}
    </div>
  );
}
