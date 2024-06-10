import React from 'react';
import './CustomAlert.css';

interface CustomAlertProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`custom-alert custom-alert-${type}`}>
      <span className="custom-alert-message">{message}</span>
      <button className="custom-alert-close" onClick={onClose}>&times;</button>
    </div>
  );
}

export default CustomAlert;
