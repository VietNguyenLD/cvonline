import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { useOutsiteClick } from "../../hooks/useOutsiteClick";

const Modal = ({ isShowing, hide, children }) => {
  const modalRef = useRef(null)  

  useOutsiteClick(modalRef,hide,isShowing)

  if (isShowing) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal-overlay" />
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal" ref={modalRef}>
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </React.Fragment>,
      document.body
    );
  }
  return null
};

export default Modal;
