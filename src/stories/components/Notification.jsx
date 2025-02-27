// src/components/Notification.jsx
import React from 'react';
import './Notification.css';

const Notification = ({ message, type = 'info' }) => {
  return (
    <div className={`notification ${type}`}>
      <p className="notification-message">{message}</p>
    </div>
  );
};

export default Notification;