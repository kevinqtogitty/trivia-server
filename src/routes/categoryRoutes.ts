import { Router } from 'express';
import { tryCatch } from '../utils/tryCatch';
import { getAllCategories } from '../controllers/categoryControllers';

const categoryRouter = Router();

categoryRouter.get('/', tryCatch(getAllCategories));

export default categoryRouter;
