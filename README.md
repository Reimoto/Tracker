# Weedtracker

A comprehensive web application for tracking cannabis consumption patterns and experiences. This full-stack application allows users to log and analyze their cannabis usage with detailed metrics and insights.

## Features

### Data Entry and Management
- **Detailed Entry Logging**
  - Track amount consumed (in grams)
  - Record time and date of consumption
  - Document cannabis strain/type
  - Monitor mood effects
  - Log consumption method (Tüte, Bong, Vaporizer, Pfeife, Edibles)
  - Track who you consumed with
- **Entry Management**
  - Edit existing entries
  - Delete entries
  - View all entries in a sortable table

### Data Visualization
- **Consumption Analytics**
  - Interactive line graph showing daily consumption
  - Visual trends over time
  - Daily consumption totals
  - Chronological data presentation

### User Interface
- **Responsive Design**
  - Mobile-friendly layout
  - Flexible grid system
  - Modern, clean interface
- **Real-time Updates**
  - Instant data reflection in graphs and tables
  - Smooth transitions and updates

## Tech Stack

### Frontend
- **React 18**
  - Functional components with hooks
  - Real-time state management
  - TypeScript for type safety
- **Vite**
  - Fast development server
  - Hot Module Replacement (HMR)
  - Optimized production builds
- **Tailwind CSS**
  - Responsive design system
  - Custom component styling
  - Utility-first approach
- **Chart.js with react-chartjs-2**
  - Interactive data visualization
  - Customizable graphs
  - Responsive charts
- **TypeScript**
  - Static type checking
  - Enhanced IDE support
  - Better code reliability

### Backend
- **Node.js with Express**
  - RESTful API endpoints
  - CORS enabled for security
  - Efficient request handling
- **SQLite3**
  - Local data persistence
  - Simple setup and maintenance
  - No external database required
- **Development Tools**
  - ESLint for code quality
  - Nodemon for development
  - Proper error handling

## Project Structure

```
├── src/                  # Frontend source code
│   ├── components/       # React components
│   │   ├── Formular.jsx        # Entry form component
│   │   ├── EntryList.jsx       # Data display and management
│   │   └── ConsumptionLineGraph.tsx  # Data visualization
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
│
├── backend/             # Backend server code
│   ├── server.js        # Express server implementation
│   └── package.json     # Backend dependencies
│
├── data/               # Database storage
│   └── weedtracker.db  # SQLite database file
│
└── public/             # Public static files
```

## Database Schema

```sql
CREATE TABLE entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    menge REAL NOT NULL,          # Amount in grams
    uhrzeit TEXT NOT NULL,        # Time of consumption
    datum TEXT NOT NULL,          # Date of consumption
    sorte TEXT NOT NULL,          # Cannabis strain/type
    stimmung TEXT NOT NULL,       # Mood effect
    wer TEXT NOT NULL,            # Consumer(s)
    konsumform TEXT NOT NULL,     # Consumption method
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

## Setup and Installation

1. **Prerequisites**
   - Node.js (v18+ recommended)
   - npm or yarn package manager
   - Git (for version control)

2. **Clone and Setup**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd Tracker-master
   ```

3. **Frontend Setup**
   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

4. **Backend Setup**
   ```bash
   # Navigate to backend directory
   cd backend

   # Install backend dependencies
   npm install

   # Start the server
   npm run dev
   ```

5. **Quick Start**
   ```bash
   # Alternative: Use the start script (Windows)
   ./start-app.bat
   ```

The frontend will run on `http://localhost:5173`, and the backend API will be available on `http://localhost:3001`.

## API Endpoints

The backend provides the following REST API endpoints:

- **Entries Management**
  - `POST /api/entries` - Create a new consumption entry
  - `GET /api/entries` - Retrieve all entries
  - `PUT /api/entries/:id` - Update an existing entry
  - `DELETE /api/entries/:id` - Delete an entry

### Request/Response Examples

#### Create Entry
```json
POST /api/entries
{
  "Menge": 0.5,
  "Uhrzeit": "14:30",
  "Datum": "2024-01-20",
  "Sorte": "White Widow",
  "Stimmung": "ok",
  "Wer": "Dominik",
  "Konsumform": "Vaporizer"
}
```

#### Update Entry
```json
PUT /api/entries/1
{
  "Menge": 0.3,
  "Uhrzeit": "15:00",
  "Datum": "2024-01-20",
  "Sorte": "Nordle",
  "Stimmung": "gut",
  "Wer": "Jenny",
  "Konsumform": "Bong"
}
```

## Development

### Frontend Development
- Uses Vite's HMR for instant updates
- TypeScript for enhanced development experience
- ESLint configured with React best practices
- Tailwind CSS for rapid UI development

### Backend Development
- Nodemon for automatic server restarts
- SQLite for simple data persistence
- CORS enabled for local development
- Error handling and logging

### Data Visualization
- Chart.js for interactive graphs
- Daily consumption aggregation
- Chronological data presentation
- Responsive design

## Contributing

Feel free to submit issues and enhancement requests. Follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Security Notes

- This application is designed for personal use
- Data is stored locally in SQLite database
- Ensure proper file permissions on the database file
- No sensitive data should be stored without encryption
- Keep your node modules up to date

## License

This project is private and not licensed for public use.

## Troubleshooting

### Common Issues
1. **Database Connection**
   - Ensure the `data` directory exists
   - Check file permissions
   - Verify SQLite installation

2. **Server Issues**
   - Check if ports 3001 and 5173 are available
   - Verify Node.js version compatibility
   - Check backend logs for errors

3. **Frontend Issues**
   - Clear browser cache
   - Check console for errors
   - Verify all dependencies are installed

For additional help, check the error logs or submit an issue.
