import MessengersModel from '../Models/MessengersModel'

class MessengersController {
	async create(req, res) {
		try {
			const { name, id, basePrice } = req.body
			const postItem = await MessengersModel.create({ name, id, basePrice })
			return res.json(postItem)
		} catch (error) {
			return res.status(500).json(error)
		}
	}
	async getAll(req, res) {
		try {
			const data = await MessengersModel.find()
			return res.json(data)
		} catch (error) {
			res.status(500).json('error')
		}
	}
	async getOne(req, res) {
		try {
			const { id } = req.params
			if (!id) {
				return res.status(400).json({ message: 'bad request' })
			}
			const data = await MessengersModel.find({ id:id })
			return res.json(data)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new MessengersController()
