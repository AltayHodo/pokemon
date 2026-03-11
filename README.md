# Pokémon Full-Stack App

A full-stack web application built with React and Node.js to demonstrate modern web development concepts. This app uses the PokéAPI to display Pokémon data with an interactive and user-friendly interface.

## 🚀 Features

- **Browse Pokémon**: View a paginated list of Pokémon with images and types
- **Detailed View**: Click on any Pokémon to see detailed stats, abilities, and physical traits
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Navigation**: Clean navbar with routing to Home, Pokémon List, and About pages
- **Backend API**: Express server that fetches data from PokéAPI

## 🛠️ Tech Stack

### Frontend

- React 19
- React Router DOM
- CSS3
- Fetch API

### Backend

- Node.js
- Express.js
- CORS middleware
- PokéAPI integration

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

## 🏃 Running the Application

You need to run both the backend and frontend servers:

### Start Backend Server (Terminal 1)

```bash
cd backend
npm start
```

The backend server will run on http://localhost:5000

### Start Frontend Server (Terminal 2)

```bash
cd frontend
npm start
```

The frontend will run on http://localhost:3000 and automatically open in your browser.

## 📁 Project Structure

```
project/
├── backend/
│   ├── server.js          # Express server with API routes
│   └── package.json       # Backend dependencies
│
└── frontend/
    ├── public/            # Static files
    └── src/
        ├── components/    # Reusable components
        │   ├── Navbar.js
        │   └── Navbar.css
        ├── pages/         # Page components
        │   ├── Home.js
        │   ├── Home.css
        │   ├── About.js
        │   ├── About.css
        │   ├── PokemonList.js
        │   ├── PokemonList.css
        │   ├── PokemonDetail.js
        │   └── PokemonDetail.css
        ├── App.js         # Main app component with routing
        └── App.css        # Global styles
```

## 🔌 API Endpoints

The backend provides the following endpoints:

- `GET /api/pokemon` - Get a paginated list of Pokémon
  - Query params: `limit` (default: 20), `offset` (default: 0)
- `GET /api/pokemon/:name` - Get detailed info for a specific Pokémon
- `GET /api/types` - Get a list of all Pokémon types

## 🎨 Pages

1. **Home** (`/`) - Landing page with app overview and features
2. **Pokémon List** (`/pokemon`) - Browse all Pokémon with pagination
3. **Pokémon Detail** (`/pokemon/:name`) - Detailed view of a specific Pokémon
4. **About** (`/about`) - Information about the project and technologies used

## 📚 Learning Concepts Demonstrated

- RESTful API design with Express
- React component architecture
- Client-side routing with React Router
- State management with React Hooks (useState, useEffect)
- Async/await for API calls
- CSS Grid and Flexbox for layouts
- Responsive design principles
- CORS configuration
- Error handling in both frontend and backend

## 🌐 External API

This project uses the [PokéAPI](https://pokeapi.co/) - a free RESTful API for Pokémon data.

## 📝 Notes

- The backend acts as a proxy to the PokéAPI to demonstrate server-side API calls
- All data is fetched in real-time from the PokéAPI
- The app includes loading states and error handling for a better user experience

## 🤝 Contributing

This is a demo project for learning purposes. Feel free to fork and experiment!

## 📄 License

This project is open source and available for educational purposes.
