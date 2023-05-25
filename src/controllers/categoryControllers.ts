import axios from 'axios';
import { Request, Response } from 'express';

const getAllCategories = async (req: Request, res: Response) => {
  const baseUrl = process.env.BASE_URL;
  const { data } = await axios.get(`${baseUrl}/categories`);
  res.json(data);
};

export { getAllCategories };
