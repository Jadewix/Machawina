const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');
const jsonPath = path.join(__dirname, 'menu.json');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("error opening database:", err.message);
        process.exit(1);
    }
    
    console.log("Connected to database...");
    const menuData = fs.readFileSync(jsonPath, 'utf8');
    
    db.run("INSERT OR REPLACE INTO menu (id, data) VALUES (1, ?)", [menuData], function(err) {
        if (err) {
            console.error("failed to update database:", err.message);
        } else {
            console.log("SUCCESS: menu.json has been synced to database.sqlite!");
        }
        db.close();
    });
});
