import Router from 'express'
import InternetController from '../Controllers/InternetController'

const router = Router()

router.post('/', InternetController.create)
router.get('/', InternetController.getAll)
router.get('/:count', InternetController.getOne)



export default router
