# Machawina Menu System

A modern web-based digital menu system built for **Machawina**, allowing customers to browse the restaurant menu seamlessly while giving restaurant staff an admin dashboard to manage items, sections, subsections, pricing, and availability.

This project was designed as a lightweight full-stack application with a clean frontend and a simple Node.js backend, optimized for QR-based restaurant experiences.

---

# Features

## Customer Interface

Customers can:

* Browse the restaurant menu
* Navigate through sections and subsections
* View item descriptions and ingredients
* See item prices
* Access the menu instantly via QR code
* Experience a fast, mobile-friendly interface

The interface is designed to be simple, responsive, and optimized for in-restaurant usage.

---

## Admin Panel

The admin panel allows restaurant staff to manage the menu easily.

Admin capabilities include:

* Add new menu items
* Edit existing menu items
* Delete menu items
* Create and manage sections
* Create and manage subsections
* Modify prices
* Control menu structure dynamically

The admin interface is separated from the public customer interface for security and simplicity.

---

# Tech Stack

## Frontend

* HTML5
* CSS3
* Vanilla JavaScript

The frontend is built with plain JavaScript to keep the application lightweight, fast, and easy to maintain.

---

## Backend

* Node.js
* Express.js

The backend server handles:

* Menu data management
* API endpoints
* Data updates from admin panel
* Communication between frontend and data storage

---

## Database

* SQLite
* JSON (fallback / legacy support)

The system uses **SQLite** as a lightweight database to store:

* Menu items
* Sections and subsections
* Ingredients
* Pricing information

SQLite provides a more structured and scalable approach compared to plain JSON while still remaining simple and easy to deploy.

A JSON file (`menu.json`) may still be used for initial data seeding or fallback purposes.

---

# Project Structure

```

machawina
│
├── client
│   ├── index.html        # Customer interface
│   ├── admin.html        # Admin panel (private)
│
│   ├── css
│   │   └── styles.css
│
│   ├── js
│   │   ├── app.js
│   │   └── admin.js
│
├── server
│   ├── server.js         # Express server
│   ├── routes
│   │   └── menu.js
│   └── controllers
│       └── menuController.js
│
├── data
│   ├── menu.json         # Initial / fallback data
│   └── database.sqlite   # SQLite database file
│
├── package.json
└── .gitignore

```

---

# Installation

Clone the repository:

```

git clone <your-repo-url>

```

Navigate into the project directory:

```

cd machawina

```

Install the required dependencies:

```

npm install

```

---

# Running the Application

Start the server:

```

node server/server.js

```

or if a start script exists:

```

npm start

```

Once the server is running, open your browser and navigate to:

```

[http://localhost:3000](http://localhost:3000)

```

Customer interface:

```

[http://localhost:3000/](http://localhost:3000/)

```

---

# Deployment

The application is deployed on Azure and accessible at:

```

[https://machawina-bmebbcd5cfakaab8.switzerlandnorth-01.azurewebsites.net/](https://machawina-bmebbcd5cfakaab8.switzerlandnorth-01.azurewebsites.net/)

```

---

# Data Management

Menu data is primarily managed through the SQLite database:

```

data/database.sqlite

```

The admin panel interacts with the backend to perform real-time CRUD operations on the database.

A JSON file is also included:

```

menu.json

```

This can be used for:

* Initial data seeding
* Backup purposes
* Development/testing

---

# Future Improvements

Possible improvements for the system include:

* Authentication system for admin panel
* Advanced role-based access control
* Order system with cart and checkout
* WhatsApp ordering integration
* Multi-language support (English / Arabic)
* Improved UI/UX and animations
* Analytics dashboard for restaurant owners

---

# Author

Developed by **Jad Saadeh** & **Antoine Douaihy**

Students focused on building modern web applications and real-world digital solutions.

GitHub:
https://github.com/Jadewix
https://github.com/antoine-douaihy
