import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PokemonList.css';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/api/pokemon?limit=${limit}&offset=${page * limit}`,
      );
      const data = await response.json();
      setPokemon(data.results);
      setLoading(false);
    } catch (err) {
      setError(
        'Failed to fetch Pokémon. Make sure the backend server is running!',
      );
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pokemon-list">
        <div className="loading">
          <div className="pokeball-loader"></div>
          <p>Loading Pokémon...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pokemon-list">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="pokemon-list">
      <div className="pokemon-list-header">
        <h1>Pokémon Collection</h1>
        <p>Click on any Pokémon to see more details</p>
      </div>

      <div className="pokemon-grid">
        {pokemon.map((poke) => (
          <Link
            to={`/pokemon/${poke.name}`}
            key={poke.id}
            className="pokemon-card"
          >
            <div className="pokemon-image">
              <img
                src={
                  poke.sprites.other['official-artwork'].front_default ||
                  poke.sprites.front_default
                }
                alt={poke.name}
                loading="lazy"
              />
            </div>
            <div className="pokemon-info">
              <span className="pokemon-id">
                #{String(poke.id).padStart(3, '0')}
              </span>
              <h3 className="pokemon-name">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="pagination-btn"
        >
          ← Previous
        </button>
        <span className="page-info">Page {page + 1}</span>
        <button onClick={() => setPage(page + 1)} className="pagination-btn">
          Next →
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
