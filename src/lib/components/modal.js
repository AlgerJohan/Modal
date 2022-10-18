import React, { useState } from "react";
import "./Css/modal.css";
import PropTypes from "prop-types";

/**
 * The modal is rendered if the showModal state is true and the show prop is true.
 * @returns A modal component that is rendered when the show prop is true.
 */
const Modal = ({ show, title, titleButton, noCloseButton, noTextButton, closeOnClick, noKeyEscape }) => {
  const [showModal, setShowModal] = useState(true);
  const modalClose = () => {
    setShowModal(false);
    document.location.reload();
  };
  document.onkeyup = function (event) {
    if (event.code === "Escape" && !noKeyEscape) {
      modalClose();
    }
  };
  document.onclick = function (event) {
    if (event.target.id === "modalContainer" && closeOnClick) {
      modalClose();
    }
  };
  return (
    showModal &&
    show && (
      <div id="modalContainer">
        <div id="confirmation" className="modal">
          <span>{title ? title : "Modal Title"}</span>
          {!noCloseButton && (
            <button className="modalClose" title="Hide Modal" onClick={modalClose}>
              X
            </button>
          )}
          <div className="modalContent">
            {!noTextButton && (
              <button className="modalCloseEnd" title="close" onClick={modalClose}>
                {titleButton ? titleButton : "Close"}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  titleButton: PropTypes.string,
  noCloseButton: PropTypes.bool,
  noTextButton: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  noKeyEscape: PropTypes.bool,
};
