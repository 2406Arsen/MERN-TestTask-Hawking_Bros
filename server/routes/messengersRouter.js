import Router from 'express'
import MessengersController from '../Controllers/MessengersController'

const router = Router()

router.post('/', MessengersController.create)
router.get('/', MessengersController.getAll)
router.get('/:id', MessengersController.getOne)

export default router
