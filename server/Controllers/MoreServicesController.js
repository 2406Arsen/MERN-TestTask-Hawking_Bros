import MoreServicesModel from '../Models/MoreServicesModel.js'

class MoreServicesController {
	async create(req, res) {
		try {
			const { name, id, basePrice } = req.body
			const postItem = await MoreServicesModel.create({ name, id, basePrice })
			return res.json(postItem)
		} catch (error) {
			return res.status(500).json(error)
		}
	}
	async getAll(req, res) {
		try {
			const data = await MoreServicesModel.find()
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
			const data = await MoreServicesModel.find({ id })
			return res.json(data)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new MoreServicesController()
