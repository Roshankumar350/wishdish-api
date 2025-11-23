import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import menuRoutes from './routes/menuRoutes';   // ✅ import your router
import { logger } from './middleware/logger';   // optional if you want logging
import { errorHandler } from './middleware/errorHandler'; // optional if you have it

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger); // ✅ middleware

// Health check
app.get('/', (req: Request, res: Response) => {
  res.send('WishDish API is running!');
});

// Routes
app.use('/api/menu', menuRoutes); // ✅ mount your menu routes

// 404 fallback
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler (typed middleware)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`WishDish API running on port ${PORT}`));
