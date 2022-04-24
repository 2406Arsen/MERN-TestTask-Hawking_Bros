import mongoose from 'mongoose'

const MinutesModel = new mongoose.Schema({
	count: {
		type: Number,
		required: true,
	},
	basePrice: {
		type: Number,
		required: true,
	},
})

export default mongoose.model('MinutesModel', MinutesModel)
