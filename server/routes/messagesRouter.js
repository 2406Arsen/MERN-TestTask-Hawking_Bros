import Router from 'express'
import MessagesController from '../Controllers/MessagesController'

const router = Router()

router.post('/', MessagesController.create)
router.get('/', MessagesController.getAll)
router.get('/:count', MessagesController.getOne)

export default router
