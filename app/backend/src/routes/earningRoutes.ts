import { Request, Response, Router } from 'express'
import EarningController from '../controller/EarningController';
import NewBillValidator from '../middlewares/newBillValidator'

const billController = new EarningController();
const router = Router();

router.post('/new', NewBillValidator, (req: Request, res: Response) => billController.createEarning(req, res));
router.get('/:id', (req: Request, res: Response) => billController.getEarnings(req, res));
export default router;