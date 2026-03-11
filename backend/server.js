const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Pokemon API base URL
const POKEMON_API = 'https://pokeapi.co/api/v2';

// Routes
app.get('/api/pokemon', async (req, res) => {
  try {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;

    const response = await fetch(
      `${POKEMON_API}/pokemon?limit=${limit}&offset=${offset}`,
    );
    const data = await response.json();

    // Fetch detailed info for each pokemon
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        return await detailResponse.json();
      }),
    );

    res.json({
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: pokemonDetails,
    });
  } catch (error) {
    console.error('Error fetching pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch pokemon data' });
  }
});

app.get('/api/pokemon/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const response = await fetch(
      `${POKEMON_API}/pokemon/${name.toLowerCase()}`,
    );

    if (!response.ok) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch pokemon data' });
  }
});

app.get('/api/types', async (req, res) => {
  try {
    const response = await fetch(`${POKEMON_API}/type`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching types:', error);
    res.status(500).json({ error: 'Failed to fetch type data' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Pokemon API Server Running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
