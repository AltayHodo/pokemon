import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to PokéDex</h1>
        <Link to="/pokemon" className="hero-button">
          Explore Pokémon
        </Link>
      </div>
    </div>
  );
}

export default Home;
