import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
