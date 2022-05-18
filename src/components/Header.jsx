import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="link">SOBRE</Link>
        <Link to="/projects" className="link">PROJETOS</Link>
        <Link to="/contacts" className="link">CONTATOS</Link>
      </nav>
    </header>

  );
}

export default Header;
