# Trashure Frontend

## Overview
Trashure adalah aplikasi web yang membantu pengguna mengelola bahan limbah secara cerdas dan mendapatkan imbalan untuk tindakan lingkungan.

## Features
- 🔐 User Authentication (Login/Register)
- 🗑️ Waste Classification
- 📊 Interactive Dashboard
- ⭐ Real-time Points System
- 🗺️ Interactive Map Integration
- 📱 Responsive Design

## Tech Stack
- ⚛️ React 18
- ⚡ Vite
- 🎨 TailwindCSS
- 🔄 Axios
- 🛣️ React Router DOM
- 🗺️ Leaflet (for maps)

## Prerequisites
- Node.js (v14 or higher)
- npm/yarn

## Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd front_end
```

2. Install dependencies
```bash
npm install
```

3. Create environment file:
```bash
# .env
VITE_MAP_SERVICE_API_KEY=your_map_service_api_key_here
VITE_API_URL=https://api.example.com
```

## Development
Start the development server:
```bash
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Project Structure
```
src/
├── assets/         # Static assets (images, fonts)
├── components/     # Reusable React components
├── context/       # React Context providers
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── routes/        # Route configurations
├── services/      # API services
└── utils/         # Utility functions
```