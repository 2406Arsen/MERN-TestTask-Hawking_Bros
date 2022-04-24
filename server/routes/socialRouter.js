import Router from 'express'
import SocialController from '../Controllers/SocialController'

const router = Router()

router.post('/', SocialController.create)
router.get('/', SocialController.getAll)
router.get('/:id', SocialController.getOne)



export default router
