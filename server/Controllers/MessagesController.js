import MessagesModel from '../Models/MessagesModel'

class MessagesController {
	async create(req, res) {
		try {
			const { count, basePrice } = req.body
			const postItem = await MessagesModel.create({ count, basePrice })
			return res.json(postItem)
		} catch (error) {
			return res.status(500).json(error)
		}
	}
	async getAll(req, res) {
		try {
			const data = await MessagesModel.find()
			return res.json(data)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
	async getOne(req, res) {
		try {
			const { count } = req.params
			if (!count) {
				return res.status(400).json({ message: 'bad request' })
			}
			const data = await MessagesModel.find({ count })
			return res.json(data)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new MessagesController()
