
import InternetModel from '../Models/InternetModel.js'
class InternetController {
	async create(req, res) {
		try {
			const { count, basePrice } = req.body
			const postItem = await InternetModel.create({ count, basePrice })
			return res.json(postItem)
		} catch (error) {
			return res.status(500).json(error)
		}
	}
	async getAll(req, res) {
		try {
			const data = await InternetModel.find()
			return res.json(data)
		} catch (error) {
			res.status(500).json('error')
		}
	}
	async getOne(req, res) {
		try {
			const { count } = req.params
			if (!count) {
				return res.status(400).json({ message: 'bad request' })
			}
			const data = await InternetModel.find({ count })
			return res.json(data)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new InternetController()
