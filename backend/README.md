# Backend Server Documentation

## Database Persistence

The application uses SQLite for data storage. The database file is stored in the `data` directory at the root of the project (`../data/weedtracker.db`). This location ensures data persistence between server restarts.

## Directory Structure

```
Tracker/
├── data/               # Contains the persistent database file
│   └── weedtracker.db
└── backend/
    ├── server.js      # Main server file
    └── package.json   # Backend dependencies
```

## Important Notes

- The database file is automatically created in the `data` directory when the server starts
- All entries are persisted between server restarts
- Make sure the `data` directory is not deleted or cleared
- Consider backing up the `data/weedtracker.db` file periodically
