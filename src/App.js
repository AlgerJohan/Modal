import React, { useState } from "react";
import "./App.css";
import Modal from "./lib/components/modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} />
    </div>
  );
};

export default App;
