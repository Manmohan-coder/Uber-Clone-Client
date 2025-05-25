# Uber Clone Client

A React + Vite frontend for an Uber-like ride-hailing application. This project provides user and captain (driver) authentication flows, registration forms, and a simple home page, styled with Tailwind CSS.

---

## Features

- **User & Captain Authentication:** Login and registration forms for both users and captains.
- **React Router:** Client-side routing for navigation between pages.
- **Context API:** Global user state management using React Context.
- **Tailwind CSS:** Utility-first CSS for rapid UI development.
- **Vite:** Fast development server and build tool.

---

## Main Libraries Used

- [React](https://react.dev/) – UI library
- [React Router DOM](https://reactrouter.com/) – Routing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Vite](https://vitejs.dev/) – Build tool and dev server
- [@remixicon/react](https://remixicon.com/) – Icon library

---

## Project Structure

Uber-Clone-client/ ├── public/ │ └── [images...] ├── src/ │ ├── App.jsx │ ├── main.jsx │ ├── context/ │ │ └── UserContext.jsx │ └── pages/ │ ├── CaptainLogin.jsx │ ├── CaptainRegister.jsx │ ├── Home.jsx │ ├── UserLogin.jsx │ └── UserRegister.jsx ├── index.html ├── package.json ├── vite.config.js └── ...

---

## Available Endpoints (Routes)

| URL Path         | Description                       |
|------------------|-----------------------------------|
| `/`              | Home page                         |
| `/login`         | User login                        |
| `/signup`        | User registration                 |
| `/cap-login`     | Captain (driver) login            |
| `/cap-signup`    | Captain (driver) registration     |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/Uber-Clone-client.git
   cd Uber-Clone-client

Install dependencies:

Start the development server:

Open in browser: Visit http://localhost:5173 (or the port shown in your terminal).

Scripts
npm run dev – Start the development server
npm run build – Build for production
npm run preview – Preview the production build
npm run lint – Run ESLint
Customization
Images: Place your own images in the public/ folder to customize backgrounds and logos.
Styling: Modify Tailwind classes in the JSX files or extend Tailwind config as needed.
Backend Integration: Connect form handlers to your backend API for real authentication and registration.
License
This project is for educational/demo purposes. Please add your own license if you plan to use it in production.