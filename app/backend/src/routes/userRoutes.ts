import { Request, Response, Router } from 'express'
import UserController from '../controller/UserController'

const userController = new UserController();
const router = Router();

router.post('/new', (req: Request, res: Response) => userController.createUser(req, res));

export default router;