import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import colors from 'colors';

import todos from './routes/todosRoute.js';
import auth from './routes/authRoute.js';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from the server');
});

app.use('/api/todos', todos);
app.use('/auth', auth);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
