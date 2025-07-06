import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h1>ReactEcom</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
      <footer className="footer">
        &copy; 2025 ReactEcom. All rights reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;


