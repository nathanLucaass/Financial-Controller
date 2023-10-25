/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Request, type Response, Router } from 'express'
import EarningController from '../controller/EarningController'
import NewBillValidator from '../middlewares/newBillValidator'

const billController = new EarningController()
const router = Router()

router.post('/new', NewBillValidator, async (req: Request, res: Response) => await billController.createEarning(req, res))
router.get('/:id', async (req: Request, res: Response) => await billController.getEarnings(req, res))
export default router
