import mongoose from 'mongoose'

const InternetModel = new mongoose.Schema({
	count: {
		type: Number,
		required: true,
	},
	basePrice: {
		type: Number,
		required: true,
	},
})

export default mongoose.model('InternetModel', InternetModel)
