import { Router } from 'express'
import userRoutes from './userRoutes'
import billRoutes from './billRoutes'
import earningRoutes from './earningRoutes'

const router = Router()

router.use('/user', userRoutes)
router.use('/bill', billRoutes)
router.use('/earning', earningRoutes)

export default router
