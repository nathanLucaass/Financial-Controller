import { Router } from 'express';
import userRoutes from './userRoutes';
import billRoutes from './billRoutes';

const router = Router();

router.use('/user', userRoutes);
router.use('/bill', billRoutes);

export default router;