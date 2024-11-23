# Solar System Explorer

An interactive 3D visualization of our solar system with educational features and real-time planetary data.

## Features

- Interactive 3D Solar System visualization using Three.js
- Real-time orbital mechanics and planet movement
- Detailed information about each celestial body
- Educational content and quiz system
- User progress tracking and favorites system

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Three.js for 3D visualization
- TailwindCSS for styling
- Redux Toolkit for state management
- React Query for API data fetching
- Framer Motion for animations

### Backend
- Node.js with Express
- MongoDB for data persistence
- Redis for caching
- TypeScript for type safety
- Jest for testing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB
- Redis

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/solar-system-explorer.git
cd solar-system-explorer
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Set up environment variables
- Create `.env` files in both frontend and backend directories
- Add necessary API keys and configuration values

5. Start the Development Servers

Frontend:
```bash
cd frontend
npm start
```

Backend:
```bash
cd backend
npm run dev
```

## API Integration

The application integrates with various NASA APIs:
- NASA APOD (Astronomy Picture of the Day)
- NASA Images and Video Library
- NASA Exoplanet API
- NASA InSight Mars Weather API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- NASA APIs for providing space data
- Three.js community for 3D visualization resources
- Contributors and maintainers
