import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/Modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ show, onClose, onSubmit, submitLabel, children, noSubmitAction }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const modalContent = show ? (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div className={styles.modal_closeBtn}>
            <a onClick={handleCloseClick}>
              <FaTimes />
            </a>
          </div>
          {/* {title && <div className={styles.modal_title}>{title}</div>} */}
        </div>
        <div className={styles.modal_body}>{children}</div>
        
        {noSubmitAction ? null : <div className={styles.modal_footer}>
          <button onClick={handleSubmitClick} className="btn btn_lg btn_success">
            {submitLabel ? submitLabel : "Proceed"}
          </button>
        </div>}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
