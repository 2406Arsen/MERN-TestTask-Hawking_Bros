import mongoose from 'mongoose'

const MoreServicesModel = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	basePrice: {
		type: Number,
		required: true,
	},
})

export default mongoose.model('MoreServicesModel', MoreServicesModel)
