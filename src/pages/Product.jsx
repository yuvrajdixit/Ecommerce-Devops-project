import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Product {id}</h2>
      <p>Details about Product {id} will appear here.</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

