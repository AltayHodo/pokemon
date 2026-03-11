import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import config from '../config';
import './PokemonDetail.css';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonDetail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${config.apiUrl}/api/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [name]);

  useEffect(() => {
    fetchPokemonDetail();
  }, [fetchPokemonDetail]);

  if (loading) {
    return (
      <div className="pokemon-detail">
        <div className="loading">
          <div className="pokeball-loader"></div>
          <p>Loading Pokémon...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pokemon-detail">
        <div className="error">
          <p>{error}</p>
          <Link to="/pokemon" className="back-btn">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-detail">
      <Link to="/pokemon" className="back-link">
        ← Back to List
      </Link>

      <div className="detail-container">
        <div className="detail-header">
          <div className="detail-image">
            <img
              src={
                pokemon.sprites.other['official-artwork'].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
          </div>
          <div className="detail-info">
            <span className="detail-id">
              #{String(pokemon.id).padStart(3, '0')}
            </span>
            <h1 className="detail-name">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
          </div>
        </div>

        <div className="detail-stats">
          <h2>Base Stats</h2>
          <div className="stats-grid">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="stat-item">
                <span className="stat-name">
                  {stat.stat.name.replace('-', ' ')}
                </span>
                <span className="stat-value">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-physical">
          <h2>Physical Traits</h2>
          <div className="physical-grid">
            <div className="physical-item">
              <strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m
            </div>
            <div className="physical-item">
              <strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
