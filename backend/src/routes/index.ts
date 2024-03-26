import { Router } from 'express';

import userRoutes from './userRoutes';
import todoRoutes from './todoRoutes';

const router = Router();

router.use('/user', userRoutes);
router.use('/todo', todoRoutes);

export default router;
