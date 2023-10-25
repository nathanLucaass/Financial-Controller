/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Request, type Response, Router } from 'express'
import UserController from '../controller/UserController'
import NewUserValidator from '../middlewares/newUserValidator'

const userController = new UserController()
const router = Router()

router.post('/new', NewUserValidator, async (req: Request, res: Response) => await userController.createUser(req, res))
router.post('/login', async (req: Request, res: Response) => await userController.login(req, res))

export default router
