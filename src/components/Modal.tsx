import React from 'react';
import '../components/Modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Login bem-sucedido!</p>
      </div>
    </div>
  );
};

export default Modal;
