import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
