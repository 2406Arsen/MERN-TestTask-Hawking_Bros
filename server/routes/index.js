import { Router } from 'express'
import messengersRouter from './messengersRouter.js'
import internetRouter from './internetRouter.js'
import minutesRouter from './minutesRouter.js'
import messagesRouter from './messagesRouter.js'
import moreServicesRouter from './moreServicesRouter.js'
import socialRouter from './socialRouter.js'

const router = new Router()

router.use('/messengers', messengersRouter)
router.use('/internet', internetRouter)
router.use('/minutes', minutesRouter)
router.use('/messages', messagesRouter)
router.use('/moreServices', moreServicesRouter)
router.use('/social', socialRouter)

export default router
