# 📌 Place Picker

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-22.14.0-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express)

A **full-stack web application** built with React (frontend) and Node.js + Express (backend) to create your personal collection of places you would like to visit or have visited.

This project started from a guided exercise, but I **significantly extended and customized it** with independent features, UX improvements, and design decisions — including dynamic modal content, auto-confirmation unselect with a countdown progress bar, **fully responsive design for mobile, tablet, and desktop users**, and **backend integration for saving and fetching data.**

This repository contains both versions:
- **Frontend-only version**: Uses browser's localStorage to persist picked places.
- **Full-stack version**: Uses a Node.js + Express backend via REST API to store user data.

You can view the Frontend-only version on the [frontend-only](https://github.com/smadi2512/place-picker/tree/frontend-only) branch and the Full-stack version on the [fullstack](https://github.com/smadi2512/place-picker/tree/fullstack) branch.

---

## 🚀 Features

### Frontend (Common to Both Versions)
- 📍 **Sort available places** based on the user's current location (fallback to default order if permission is denied)
- ➕ **Select new places** and prevent duplicates with a warning modal
- ❌ **Remove places** with a controlled confirmation modal
- ⏳ **Auto-confirm delete** after 5 seconds, with a countdown progress bar
- 🎨 **Dynamic modal content** (success, warning, delete confirmation)
- 📱 Fully **responsive design** for mobile, tablet, and desktop users

### Full-Stack Version Enhancements
- ⚡ **Backend API**: React frontend interacts with backend to persist user data
- 🛡️ **Error Handling**: Graceful handling for network/server issues.
- 🚀 **Optimistic UI Updates**: Immediate visual feedback when adding/removing places for smooth user experience, with automatic rollback if backend synchronization fails

### Frontend-Only Version
- 💾 Local Storage: Data is stored directly in the browser's localStorage.

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** (hooks: useState, useRef, useEffect, useCallback)
- **React Portals** for modal rendering
- **Optimistic UI Updates** for select/unselect places with rollback
- **Browser's localStorage** (used in frontend-only version)
- **Geolocation API** to get the user's current location for sorting with a default order if permission is denied
- **JavaScript (ES6+)**
- **CSS3/Styling**
- **Vite** (for development and build)

### Backend (Full-stack version)
- Node.js
- Express.js for creating REST API endpoints
- JSON files for data storage (places.json & user-places.json)

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
│   ├── data.js                   # Places dataset (for frontend-only version)
│   ├── http.js                   # API request functions (for full-stack version)
│   ├── loc.js                    # Distance calculation utilities
│   ├── App.jsx                   # Root app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
│
└── README.md                     # Project documentation
```

---

## ⚙️ Installation & Usage


### Full-stack version:
Clone the repository and install frontend dependencies:

```bash
git clone git@github.com:smadi2512/place-picker.git
cd place-picker
npm install
```
Start the frontend development server:

```bash
npm run dev
```
- Note: The frontend will run on http://localhost:5173.


In a new terminal, navigate to the backend directory and install its dependencies:

```bash
cd backend
npm install
```
Start the backend server:

```bash
npm start
```
- Note: The backend will run on http://localhost:3000.

### Frontend-only version:
Switch to the frontend-only branch.

Install dependencies and run the dev server from the root directory:

```bash
npm install
npm run dev
```
- Note: The app will run on http://localhost:5173 and use localStorage.

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

## 🧭 Project Versions & Branches

- [Full-stack version (current)](https://github.com/smadi2512/place-picker): The current, main branch featuring the full-stack implementation with React and Node.js.
- [Frontend-only version](https://github.com/smadi2512/place-picker/tree/frontend-only): The initial version of the project, a React frontend that uses the browser's localStorage.

---

## 👩‍💻 Author

Created by **Walaa Smadi**✨ \
Passionate React developer building modern, maintainable, scalable, performant, and user-friendly web apps.
- GitHub: [@smadi2512](https://github.com/smadi2512)
- LinkedIn: [Walaa Smadi](https://www.linkedin.com/in/walaa-bilal-smadi/)

Feel free to fork, star ⭐, and contribute!