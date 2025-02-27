import React from 'react';
import './NewCard.css'; 
const NewCard = ({ title, content }) => {
  return (
    <div className="new-card">
      <h2 className="new-card-title">{title}</h2>
      <p className="new-card-content">{content}</p>
    </div>
  );
};

export default NewCard;
