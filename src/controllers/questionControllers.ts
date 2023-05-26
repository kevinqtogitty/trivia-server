import axios from 'axios';
import { Request, Response } from 'express';

const getRandomQuestion = async (req: Request, res: Response) => {
  const baseUrl = process.env.BASE_URL;
  const { data } = await axios.get(`${baseUrl}/questions?limit=1&`);
  res.status(200).json(data);
};

export { getRandomQuestion };
