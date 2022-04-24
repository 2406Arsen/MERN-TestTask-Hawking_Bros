import Router from 'express'
import MinutesController from '../Controllers/MinutesController'

const router = Router()

router.post('/', MinutesController.create)
router.get('/', MinutesController.getAll)
router.get('/:count', MinutesController.getOne)

export default router
