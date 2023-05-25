import { Router } from 'express';
import { tryCatch } from '../utils/tryCatch';
import { getRandomQuestion } from '../controllers/questionControllers';

const questionRouter = Router();

questionRouter.get('/', tryCatch(getRandomQuestion));

export default questionRouter;