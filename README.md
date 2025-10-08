# 📌 Place Picker

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-22.14.0-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express)


A **full-stack web application** built with **React (frontend) and Node.js + Express (backend)** to create your personal collection of places you would like to visit or you have visited.
The React frontend communicates with the backend via RESTful APIs to persist user data. You can select/unselect your favorite places easily.

This project started from a guided exercise, but I **significantly extended and customized it** with independent features, UX improvements, and design decisions — including dynamic modal content, auto-confirmation unselect with a countdown progress bar, **fully responsive design for mobile, tablet, and desktop users**, and **backend integration for saving and fetching data.**

---

## 🚀 Features

- ⚡ **Full-Stack Integration**: React frontend interacts with Node.js backend to persist user data
- 📍 Sort available places based on the user's current location (fallback to default order if permission is denied)
- 💾 Save picked places to **backend (via API)**
- ➕ Select new places and prevent duplicates with a warning modal
- ❌ Remove places with a controlled confirmation modal
- ⏳ Auto-confirm delete after 5 seconds, with a countdown progress bar
- 🎨 Dynamic modal content (success, warning, delete confirmation)
- 📱 Fully **responsive design** for mobile, tablet, and desktop users
- 🛡️ Graceful error handling for network/server issues

---

## 🛠️ Tech Stack

### Frontend:

- **React** (hooks: useState, useRef, useEffect, useCallback)
- **React Portals** for modal rendering
- **Geolocation API** to get the user's current location for sorting with a default order if permission is denied
- **JavaScript (ES6+)**
- **CSS3/Styling**
- **Vite** (for development and build)

### Backend:

- Node.js
- Express
- REST API Endpoints
- JSON-based data storage (places.json, user-places.json)

---

## 📂 Project Structure

```text
PlacePicker/
├── backend/                      # Node.js + Express backend
│   ├── data/
│   │   ├── places.json
│   │   └── user-places.json
│   └── app.js                    # Express server with REST API routes
│
├── src/
│   ├── assets/                   # Images and static files
│   │   ├── places/               # Place images
│   │   ├── screenshots/          # Project screenshots
│   │   └── logo.png              # App logo
│   │
│   ├── components/               # Reusable components
│   │   ├── UI/                   # Shared UI components
│   │   │   ├── Modal.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   └── Error.jsx
│   │   ├── AvailablePlaces.jsx
│   │   ├── Places.jsx
│   │   └── DeleteConfirmation.jsx
│   │
|   |
│   ├── http.js                   # API request functions
│   ├── loc.js                    # Distance calculation utilities
│   ├── App.jsx                   # Root app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
│
└── README.md                     # Project documentation
```
---

## ⚙️ Installation & Usage

### Frontend Setup
Clone the repository, install dependencies, and start the development server:

```bash
git clone git@github.com:smadi2512/place-picker.git
cd place-picker
npm install
npm run dev
```
Frontend (Vite) runs at http://localhost:5173

## Backend Setup
Open a new terminal for backend, install dependencies, and start the server:

```bash
cd backend
npm install
npm start
```
Backend (Express) runs at http://localhost:3000

---

## 📸 Screenshots

<table align="center">
  <tr>
    <td>
      <h4 align="center">PlacePicker desktop view</h4>
      <img src="./src/assets/screenshots/placepicker-desktop.png" alt="Desktop view" width="300"/>
    </td>
    <td>
      <h4 align="center">PlacePicker tablet view</h4>
      <img src="./src/assets/screenshots/placepicker-tablet.png" alt="Tablet view" width="300" />
    </td>
  </tr>
  <tr>
    <td>
      <h4 align="center">PlacePicker mobile view</h4>
      <img src="./src/assets/screenshots/placepicker-mobile.png" alt="Mobile view" width="300"/></td>
    <td>
      <h4 align="center">Delete confirmation modal</h4>
      <img src="./src/assets/screenshots/delete-modal.png" alt="Modal view" width="300" />
    </td>
  </tr>
</table>

----

## 🧩 Future Improvements

- ➕ Lightbox with more details about a place
- 🌍 Add a map view with selected places highlighted.
- 🔎 Search & filter functionality for places.
- ⚡ Upgrade backend to a real database (MongoDB/PostgreSQL)


---

## 👩‍💻 Author

Created by **Walaa Smadi**✨ \
Passionate React developer building modern, maintainable, scalable, performant, and user-friendly web apps.
- GitHub: [@smadi2512](https://github.com/smadi2512)
- LinkedIn: [Walaa Smadi](https://www.linkedin.com/in/walaa-bilal-smadi/)

Feel free to fork, star ⭐, and contribute!
