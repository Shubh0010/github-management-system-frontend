# GitHub Management System Frontend

A modern React-based frontend application for managing GitHub repositories and documents with advanced search capabilities.

## Features

- Advanced document search functionality
- Document history tracking
- GitHub repository integration
- Modern and responsive user interface
- Redux-based state management
- Real-time updates with HMR (Hot Module Replacement)

## Tech Stack

- React 18+
- Vite (Build tool)
- Redux Toolkit (State Management)
- React Router (Navigation)
- Modern JavaScript (ES6+)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd github-management-system-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API and external service integrations
├── store/         # Redux store configuration and slices
└── App.jsx        # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build