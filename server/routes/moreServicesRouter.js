import Router from 'express'
import MessengersController from '../Controllers/MessengersController'
import MoreServicesController from '../Controllers/MoreServicesController'

const router = Router()

router.post('/', MoreServicesController.create)
router.get('/', MoreServicesController.getAll)
router.get('/:id', MoreServicesController.getOne)



export default router
