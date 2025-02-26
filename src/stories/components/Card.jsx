// src/components/Card.jsx
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;