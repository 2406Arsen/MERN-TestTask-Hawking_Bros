import mongoose from 'mongoose'

const MessagesModel = new mongoose.Schema({
	count: {
		type: Number,
		required: true,
	},
	basePrice: {
		type: Number,
		required: true,
	},
})

export default mongoose.model('MessagesModel', MessagesModel)
