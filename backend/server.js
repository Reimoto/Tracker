import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { mkdirSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const dbPath = path.join(__dirname, '..', 'data', 'weedtracker.db');

// Ensure data directory exists
const dataDir = path.join(__dirname, '..', 'data');
if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
        createTables();
    }
});

// Create tables
function createTables() {
    db.run(`
        CREATE TABLE IF NOT EXISTS entries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            menge REAL NOT NULL,
            uhrzeit TEXT NOT NULL,
            datum TEXT NOT NULL,
            sorte TEXT NOT NULL,
            stimmung TEXT NOT NULL,
            wer TEXT NOT NULL,
            konsumform TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
}

// Routes
app.post('/api/entries', (req, res) => {
    const { Menge, Uhrzeit, Datum, Sorte, Stimmung, Wer, Konsumform } = req.body;
    
    db.run(
        `INSERT INTO entries (menge, uhrzeit, datum, sorte, stimmung, wer, konsumform)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [Menge, Uhrzeit, Datum, Sorte, Stimmung, Wer, Konsumform],
        function(err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                id: this.lastID,
                message: "Entry added successfully"
            });
        }
    );
});

app.get('/api/entries', (req, res) => {
    db.all('SELECT * FROM entries ORDER BY created_at DESC', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Delete entry route
app.delete('/api/entries/:id', (req, res) => {
    const id = req.params.id;
    
    db.run('DELETE FROM entries WHERE id = ?', id, function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: "Entry deleted successfully" });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
