# Admin Console

A modern admin dashboard built with React, Vite, Bootstrap, and Recharts. This application provides an intuitive interface for managing business metrics with interactive charts and responsive design. This project only show the frontend part of the website.

## Features

- 📊 **Interactive Dashboard** - Real-time data visualization with line and pie charts
- 🎨 **Modern UI** - Built with React Bootstrap for responsive, mobile-friendly design
- 🔍 **Smart Search** - Quick search functionality across dashboard metrics
- 📈 **Data Visualization** - Revenue, profit, and expense tracking with Recharts
- ⚡ **Fast Development** - Powered by Vite for lightning-fast HMR (Hot Module Replacement)

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Bootstrap 2** - UI component library
- **Recharts 3** - Charting library
- **ESLint** - Code linting

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone or navigate to the project directory:
```bash
cd adminConsole
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will start and you'll see output similar to:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open your browser and navigate to `http://localhost:5173/` to view the application.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Lint Code

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
adminConsole/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── App.jsx      # Main application component
│   ├── App.css      # Application styles
│   ├── index.css    # Global styles
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Development Notes

- The project uses **@vitejs/plugin-react** for Fast Refresh during development
- Bootstrap CSS is imported globally for consistent styling
- All navigation features currently show toast notifications (under development)

## Browser Support

This application supports all modern browsers that support ES6+ features.

---

Built with ❤️ using React + Vite
