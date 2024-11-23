import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createClient } from 'redis';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/solar-system-explorer')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Initialize Redis
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.connect()
  .then(() => console.log('Connected to Redis'))
  .catch((error) => console.error('Redis connection error:', error));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Solar System Explorer API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
