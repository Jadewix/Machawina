const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Required for Azure folder paths

const app = express();

// 1. CLOUD FIX: Azure uses dynamic ports
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

// 2. CLOUD FIX: Serve your frontend files to the internet
app.use(express.static('public'));

// 3. CLOUD FIX: Persistent database path so Azure doesn't delete your menu
const dbPath = process.env.HOME
    ? path.join(process.env.HOME, 'database.sqlite')
    : path.join(__dirname, 'database.sqlite');

// Connect to SQLite Database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log(`✅ Connected to SQLite database at: ${dbPath}`);

        // Create a table to hold the menu document
        db.run(`CREATE TABLE IF NOT EXISTS menu (
            id INTEGER PRIMARY KEY,
            data TEXT
        )`, () => {
            // MIGRATION TRICK: If the database is empty, copy data from menu.json
            db.get("SELECT * FROM menu WHERE id = 1", (err, row) => {
                if (!row) {
                    let initialData = '[]';
                    // Look in the current folder for menu.json
                    const jsonPath = path.join(__dirname, 'menu.json');
                    if (fs.existsSync(jsonPath)) {
                        console.log("📦 Found menu.json! Migrating data to SQLite...");
                        initialData = fs.readFileSync(jsonPath, 'utf8');
                    }
                    db.run("INSERT INTO menu (id, data) VALUES (1, ?)", [initialData], (err) => {
                        if (!err) console.log("✅ Data successfully migrated to database!");
                    });
                }
            });
        });
    }
});

// --- THE API BRIDGES ---

// Bridge 1: The website asks for the menu
app.get('/api/menu', (req, res) => {
    db.get("SELECT data FROM menu WHERE id = 1", (err, row) => {
        if (err || !row) {
            res.status(500).json({ error: "Could not fetch menu" });
        } else {
            res.json(JSON.parse(row.data));
        }
    });
});

// Bridge 2: The admin panel sends new edits to save
app.post('/api/menu', (req, res) => {
    const updatedMenuString = JSON.stringify(req.body);

    db.run("UPDATE menu SET data = ? WHERE id = 1", [updatedMenuString], function(err) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to save to database" });
        } else {
            res.json({ success: true, message: "Menu successfully updated in SQLite!" });
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});