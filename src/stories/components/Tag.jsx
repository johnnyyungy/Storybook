// src/components/Tag.jsx
import React from 'react';
import './Tag.css';

const Tag = ({ label, color = 'gray' }) => {
  return (
    <span className={`tag tag-${color}`}>
      {label}
    </span>
  );
};

export default Tag;
