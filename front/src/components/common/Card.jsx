import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/card.css';

const Card = ({ title, to }) => {
  return (
    <Link to={to} className="card">
      <h1>{title}</h1>
    </Link>
  );
};

export default Card;