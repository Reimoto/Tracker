# Weedtracker

A comprehensive web application for tracking cannabis consumption patterns and experiences. This full-stack application allows users to log and analyze their cannabis usage with detailed metrics and insights.

## Features

- **Detailed Entry Logging**
  - Track amount consumed
  - Record time and date of consumption
  - Document cannabis strain/type
  - Monitor mood effects
  - Log consumption method
  - Track who you consumed with

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite (for fast development and building)
- Tailwind CSS (for styling)
- ESLint (code quality and consistency)

### Backend
- Node.js with Express
- SQLite3 for data persistence
- CORS enabled for secure cross-origin requests

## Project Structure

```
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
│
├── backend/             # Backend server code
│   └── server.js        # Express server implementation
│
├── data/               # Database storage
│   └── weedtracker.db  # SQLite database file
│
└── public/             # Public static files
```

## Database Schema

The application uses SQLite with the following main table structure:

```sql
CREATE TABLE entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    menge REAL NOT NULL,          # Amount
    uhrzeit TEXT NOT NULL,        # Time
    datum TEXT NOT NULL,          # Date
    sorte TEXT NOT NULL,          # Strain/Type
    stimmung TEXT NOT NULL,       # Mood
    wer TEXT NOT NULL,            # Who with
    konsumform TEXT NOT NULL,     # Consumption method
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

## Setup and Installation

1. **Prerequisites**
   - Node.js (latest LTS version recommended)
   - npm or yarn package manager

2. **Frontend Setup**
   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   node server.js
   ```

The frontend will run on `http://localhost:5173` by default, and the backend API will be available on `http://localhost:3001`.

## Development

- Frontend development uses Vite's HMR (Hot Module Replacement)
- TypeScript is configured for type safety
- ESLint is set up with recommended React rules
- Tailwind CSS is configured for styling

## API Endpoints

The backend provides the following REST API endpoints:

- `POST /api/entries` - Create a new consumption entry
- `GET /api/entries` - Retrieve all entries
- Additional endpoints for data analysis and management

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is private and not licensed for public use.

## Security Note

This application is designed for personal use and stores data locally. Ensure your database file is properly secured if storing sensitive information.
