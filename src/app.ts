import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Express } from 'express-serve-static-core';

// Import your route handlers and middleware
import exampleRoutes from './routes/formRoutes';
// Create an Express app
const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api', exampleRoutes);


// Start the server
const port: number = parseInt(process.env.PORT || '3000', 10);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});