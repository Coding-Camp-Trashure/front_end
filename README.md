# Trashure Frontend Application

---

## Overview
Trashure adalah platform pengelolaan sampah pintar yang membantu pengguna mengklasifikasikan bahan sampah secara otomatis dan mendapatkan imbalan untuk tindakan lingkungan. Dibangun dengan React dan teknologi web modern.

## Features
- 🔐 User Authentication
  - Login/Register system
  - Profile management
  - Password reset functionality
- 🗑️ Smart Waste Classification
  - AI-powered waste detection
  - Real-time classification
  - Support for multiple waste types
- 📊 Interactive Dashboard
  - Points tracking
  - Activity history
  - Transfer system
- ⭐ Rewards System
  - Real-time point accumulation
  - Transfer to digital wallets
  - Transaction history
- 🗺️ Location Services
  - Interactive map integration
  - Nearby collection points
  - Real-time location updates
- 📱 Responsive Design
  - Mobile-first approach
  - Cross-device compatibility
  - Adaptive layouts

## Tech Stack
- ⚛️ React 18
- ⚡ Vite
- 🎨 TailwindCSS
- 🔄 Axios
- 🛣️ React Router DOM
- 🗺️ Leaflet Maps
- 📷 Camera API Integration

## Prerequisites
- Node.js (v14 or higher)
- npm/yarn
- Modern web browser

## Installation
1. Clone the repository
```bash
git clone [repository-url]
cd front_end
```

2. Install dependencies
```bash
npm install
```

3. Create environment files:

```bash
# .env.development
VITE_API_URL=http://localhost:9000

# .env.production
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
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure
```
src/
├── assets/         # Static assets (images, icons, logos)
├── components/     # React components
│   ├── camera/     # Camera-related components
│   ├── dashboard/  # Dashboard components
│   └── layout/     # Layout components
├── context/       # Context providers
│   └── AuthContext.jsx
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── routes/        # Route configurations
├── services/      # API services
│   ├── api.js
│   └── auth.service.js
└── utils/         # Utility functions
    └── data.js
```

## Environment Variables
```env
VITE_MAP_SERVICE_API_KEY=   # Map API
VITE_API_URL=               # Backend API URL
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors
- vozert

## Acknowledgments
- UI Components: TailwindCSS
- Icons: React Icons
- Maps: Leaflet
- Camera Integration: Web APIs
```