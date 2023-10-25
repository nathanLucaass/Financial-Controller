/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Request, type Response, Router } from 'express'
import BillController from '../controller/BillController'
import NewBillValidator from '../middlewares/newBillValidator'

const billController = new BillController()
const router = Router()

router.post('/new', NewBillValidator, async (req: Request, res: Response) => await billController.createBill(req, res))
router.get('/:id', async (req: Request, res: Response) => await billController.getBills(req, res))
export default router
