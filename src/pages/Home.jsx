import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h2>Welcome to ReactEcom</h2>
      <p>Shop our curated selection of quality products.</p>
      <div className="products">
        <Link to="/product/1" className="product-card">Product 1</Link>
        <Link to="/product/2" className="product-card">Product 2</Link>
        <Link to="/product/3" className="product-card">Product 3</Link>
      </div>
    </div>
  );
}
