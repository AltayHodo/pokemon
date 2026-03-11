# Full-Stack Web Development Project Specification

## Project: PokéDex Application

### 📋 Overview

Build a full-stack web application that displays Pokémon data using React for the frontend and Node.js/Express for the backend. The application will fetch data from the [PokéAPI](https://pokeapi.co/) and present it in a user-friendly interface with multiple pages and navigation.

### 🎯 Learning Objectives

By completing this project, you will demonstrate proficiency in:

- Building RESTful APIs with Express.js
- Creating React components and managing component state
- Implementing client-side routing with React Router
- Making asynchronous HTTP requests
- Structuring a full-stack application
- Styling with CSS (Flexbox and Grid)
- Handling loading states and errors
- Separating concerns between frontend and backend

---

## 🛠️ Technical Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **PokéAPI** - External data source

### Frontend

- **React** (v18+) - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling
- **Fetch API** - HTTP requests

---

## 📁 Project Structure

```
project/
├── backend/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   └── Navbar.css
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── Home.css
    │   │   ├── About.js
    │   │   ├── About.css
    │   │   ├── PokemonList.js
    │   │   ├── PokemonList.css
    │   │   ├── PokemonDetail.js
    │   │   └── PokemonDetail.css
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

---

## 🎨 Feature Requirements

### 1. Backend API (Express Server)

**Setup:**

- Initialize a Node.js project with `npm init`
- Install dependencies: `express`, `cors`
- Server should run on port **3001**

**Required Endpoints:**

#### `GET /api/pokemon`

- Fetches a paginated list of Pokémon
- **Query Parameters:**›
  - `limit` (default: 20) - Number of Pokémon to return
  - `offset` (default: 0) - Starting position
- **Response:** Array of Pokémon objects with detailed information
- **Implementation:**
  - Call `https://pokeapi.co/api/v2/pokemon?limit=X&offset=Y`
  - Fetch detailed data for each Pokémon from their individual URLs
  - Return combined results

#### `GET /api/pokemon/:name`

- Fetches detailed information for a specific Pokémon
- **URL Parameter:** `name` - Pokémon name (case-insensitive)
- **Response:** Single Pokémon object with full details
- **Error Handling:** Return 404 if Pokémon not found

#### `GET /api/types`

- Fetches list of all Pokémon types
- **Response:** Array of type objects
- **URL:** `https://pokeapi.co/api/v2/type`

**Additional Requirements:**

- Enable CORS for frontend communication
- Add error handling for all routes
- Use async/await for API calls

---

### 2. Frontend Application (React)

#### **Page 1: Home (`/`)**

**Required Elements:**

- Hero section with:
  - App title: "Welcome to PokéDex"
  - Subtitle/description
  - Call-to-action button linking to Pokémon list
- Features section showcasing app capabilities
- Attractive, welcoming design

#### **Page 2: Pokémon List (`/pokemon`)**

**Required Elements:**

- Grid layout displaying Pokémon cards
- Each card shows:
  - Pokémon image
  - Pokémon number (formatted as #001, #002, etc.)
  - Pokémon name (capitalized)
- Pagination controls:
  - "Previous" button (disabled on first page)
  - Current page indicator
  - "Next" button
  - Display 20 Pokémon per page
- Cards are clickable and navigate to detail page
- Loading state while fetching data
- Error message if fetch fails

#### **Page 3: Pokémon Detail (`/pokemon/:name`)**

**Required Elements:**

- Back button/link to return to list
- Large Pokémon image
- Pokémon number and name
- Base Stats section:
  - Display all 6 stats (HP, Attack, Defense, etc.)
  - Show stat names and values
- Physical Traits section:
  - Height (in meters)
  - Weight (in kilograms)
- Loading state while fetching data
- Error handling for invalid Pokémon names

#### **Page 4: About (`/about`)**

**Required Elements:**

- Project overview
- Technologies used (frontend, backend, API)
- Features list
- Learning objectives
- Link to PokéAPI documentation

#### **Navigation Component**

**Required Elements:**

- Fixed/sticky navigation bar
- App logo/branding
- Links to all pages (Home, Pokémon, About)
- Visible on all pages
- Highlight active page (optional enhancement)

---

## 🔧 Implementation Guidelines

### Backend Development Steps

1. **Initialize Backend**

   ```bash
   mkdir backend && cd backend
   npm init -y
   npm install express cors
   ```

2. **Create server.js**
   - Import required modules
   - Configure Express app
   - Enable CORS middleware
   - Define routes
   - Start server on port 3001

3. **Test Endpoints**
   - Use browser or Postman
   - Verify data returns correctly
   - Check error handling

### Frontend Development Steps

1. **Initialize React App**

   ```bash
   npx create-react-app frontend
   cd frontend
   npm install react-router-dom
   ```

2. **Create Folder Structure**
   - Create `components/` folder in `src/`
   - Create `pages/` folder in `src/`

3. **Build Components in Order**
   - Start with Navbar component
   - Create page components (Home, About, PokemonList, PokemonDetail)
   - Add corresponding CSS files for each component

4. **Implement React Router**
   - Wrap app in `BrowserRouter`
   - Define routes in App.js
   - Use `Link` components for navigation
   - Use `useParams` hook for dynamic routes

5. **Add State Management**
   - Use `useState` for local component state
   - Use `useEffect` for data fetching
   - Handle loading and error states

6. **Connect to Backend**
   - Use Fetch API to call backend endpoints
   - Ensure backend is running on port 3001
   - Handle async operations properly

---

## ✅ Acceptance Criteria

Your project will be considered complete when:

### Backend

- [ ] Server starts successfully on port 3001
- [ ] All three API endpoints work correctly
- [ ] CORS is properly configured
- [ ] Error handling returns appropriate status codes
- [ ] Console logs confirm successful API calls

### Frontend

- [ ] Application runs without errors
- [ ] All four pages are accessible via navigation
- [ ] Navbar appears on every page
- [ ] Pokémon list displays with pagination
- [ ] Clicking a Pokémon card navigates to detail page
- [ ] Detail page shows complete Pokémon information
- [ ] Loading states appear while fetching data
- [ ] Error messages display when appropriate
- [ ] Application is responsive and visually appealing

### Integration

- [ ] Frontend successfully communicates with backend
- [ ] Page navigation works smoothly
- [ ] Data flows from PokéAPI → Backend → Frontend
- [ ] No CORS errors in console
- [ ] Both servers run simultaneously without conflicts

---

## 🚀 Getting Started

1. Create a new project directory
2. Build backend first (easier to test independently)
3. Test backend endpoints before starting frontend
4. Create React app and install dependencies
5. Build components one at a time
6. Test frequently during development
7. Style incrementally as you build

---

## 🎓 Assessment Rubric

| Criteria                           | Points  |
| ---------------------------------- | ------- |
| Backend API implementation         | 25      |
| React component structure          | 20      |
| Routing and navigation             | 15      |
| State management and data fetching | 20      |
| Styling and user experience        | 10      |
| Error handling                     | 10      |
| Code quality and organization      | 10      |
| **Total**                          | **110** |

---

## 💡 Helpful Tips

1. **Start Simple** - Get basic functionality working before adding styles
2. **Test Often** - Check each feature as you build it
3. **Use DevTools** - Browser console and React DevTools are your friends
4. **Read Documentation** - PokéAPI docs, React docs, Express docs
5. **Console.log Everything** - Debug by logging data at each step
6. **One Feature at a Time** - Don't try to build everything at once
7. **Ask Questions** - If stuck for more than 30 minutes, ask for help

---

## 🌟 Bonus Challenges (Optional)

Once you complete the core requirements, try these enhancements:

1. **Search Functionality** - Add a search bar to find Pokémon by name
2. **Filtering** - Filter Pokémon by type
3. **Favorites** - Let users save favorite Pokémon (localStorage)
4. **Caching** - Implement backend caching to reduce API calls
5. **Advanced Styling** - Add animations and transitions
6. **Compare Feature** - Compare stats between two Pokémon
7. **Dark Mode** - Add theme toggling
8. **Deployment** - Deploy frontend to Vercel and backend to Render/Railway

---

## 📚 Resources

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Express Documentation](https://expressjs.com/)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## ⏰ Recommended Timeline

- **Day 1-2:** Backend setup and API endpoints
- **Day 3-4:** React setup, routing, and Navbar
- **Day 5-6:** Home and About pages
- **Day 7-8:** Pokémon list page with pagination
- **Day 9-10:** Pokémon detail page
- **Day 11-12:** Styling and polish
- **Day 13-14:** Testing, bug fixes, and documentation

---

## 📝 Submission Requirements

1. Complete source code for both frontend and backend
2. README.md with:
   - How to install dependencies
   - How to run the application
   - Any challenges you faced
   - Features you implemented
3. Screenshots of all pages working
4. Brief reflection (200-300 words) on what you learned

---

## ❓ Common Issues and Solutions

**Issue:** CORS error when fetching from backend

- **Solution:** Ensure `app.use(cors())` is in server.js before routes

**Issue:** "Cannot GET /api/pokemon"

- **Solution:** Check backend server is running on port 3001

**Issue:** React app won't start

- **Solution:** Delete node_modules and package-lock.json, run `npm install`

**Issue:** Pokémon images not loading

- **Solution:** Use `sprites.other['official-artwork'].front_default` or fallback to `sprites.front_default`

**Issue:** Pagination not working

- **Solution:** Check that `page` state updates trigger `useEffect` re-render

---

Good luck with your project! Remember: every developer gets stuck sometimes. The key is persistence and knowing when to ask for help. 🚀
