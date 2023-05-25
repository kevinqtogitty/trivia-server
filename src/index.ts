import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import questionRouter from './routes/questionRoutes';
import categoryRouter from './routes/categoryRoutes';

/* Express Init */
const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Hello' });
});

app.use('/question', questionRouter);
app.use('/categories', categoryRouter);

app.listen(PORT, (): void => {
  console.log(`Server on port: ${PORT}`);
});
