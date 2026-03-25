const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// 1. CLOUD FIX: Azure uses dynamic ports
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

// 2. CLOUD FIX: Serve your frontend files to the internet from the 'public' folder
app.use(express.static('public'));

// 3. CLOUD FIX: Persistent database path so Azure doesn't delete your menu on update
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
            // MIGRATION TRICK: Prevent empty database crashes!
            db.get("SELECT * FROM menu WHERE id = 1", (err, row) => {
                if (!row) {
                    // Safe skeleton data so the frontend has something to load without crashing!
                    let initialData = JSON.stringify([
                        {
                            "left": [
                                {
                                    "type": "category",
                                    "id": "starters",
                                    "title_en": "Starters",
                                    "title_ar": "مقبلات",
                                    "items": [
                                        { "name_en": "Test Item", "name_ar": "عنصر اختبار", "price": "10.0" }
                                    ]
                                }
                            ],
                            "right": []
                        }
                    ]);

                    // If you have a local menu.json, it will copy that instead!
                    const jsonPath = path.join(__dirname, 'menu.json');
                    if (fs.existsSync(jsonPath)) {
                        console.log("📦 Found menu.json! Migrating data to SQLite...");
                        initialData = fs.readFileSync(jsonPath, 'utf8');
                    }

                    // Inject the initial data
                    db.run("INSERT INTO menu (id, data) VALUES (1, ?)", [initialData], (err) => {
                        if (!err) console.log("✅ Jumpstart data injected successfully!");
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
        if (err) {
            console.error("Database read error:", err);
            res.status(500).json({ error: "Database error" });
        } else if (!row) {
            // If it's somehow still empty, send an empty array instead of crashing
            res.json([]);
        } else {
            res.json(JSON.parse(row.data));
        }
    });
});

// Bridge 2: The admin panel sends new edits to save
app.post('/api/menu', (req, res) => {
    const updatedMenuString = JSON.stringify(req.body);

    // 'INSERT OR REPLACE' guarantees saving works even if row 1 was accidentally deleted
    db.run("INSERT OR REPLACE INTO menu (id, data) VALUES (1, ?)", [updatedMenuString], function(err) {
        if (err) {
            console.error("Save error:", err);
            res.status(500).json({ error: "Failed to save to database" });
        } else {
            res.json({ success: true, message: "Menu successfully updated in SQLite!" });
        }
    });
});

// Bridge 3: FORCE SYNC - Overwrites the database with menu.json
app.get('/api/sync', (req, res) => {
    const jsonPath = path.join(__dirname, 'menu.json');

    // Check if your menu.json file exists on the server
    if (fs.existsSync(jsonPath)) {
        // Read your actual, full menu file
        const fileData = fs.readFileSync(jsonPath, 'utf8');

        // Force the database to overwrite everything with your file's data
        db.run("INSERT OR REPLACE INTO menu (id, data) VALUES (1, ?)", [fileData], function(err) {
            if (err) {
                console.error(err);
                res.status(500).send("❌ Failed to sync database.");
            } else {
                res.send("✅ SUCCESS! Your menu.json has been copied into the live database. You can refresh your website now!");
            }
        });
    } else {
        res.status(404).send("❌ Could not find menu.json. Make sure you uploaded it to Azure!");
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});