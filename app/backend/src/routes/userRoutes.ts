import { Request, Response, Router } from 'express'
import UserController from '../controller/UserController'
import NewUserValidator from '../middlewares/newUserValidator'

const userController = new UserController();
const router = Router();

router.post('/new', NewUserValidator, (req: Request, res: Response) => userController.createUser(req, res));
router.post('/login', (req: Request, res: Response) => userController.login(req, res));
export default router;