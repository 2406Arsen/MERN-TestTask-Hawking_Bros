import express from 'express'
import mongoose from 'mongoose'
import router from './routes/index.js'
import cors from 'cors'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 5000
const DB_URL =
	process.env.DB_URL ||
	'mongodb+srv://test-task:1q2w3e4r@cluster0.sqpsd.mongodb.net/myFirstDatabase'

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api', router)

const start = async () => {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
		app.listen(PORT, () => {
			console.log('server started on port -> ' + PORT)
		})
	} catch (error) {
		console.log(error)
	}
}

start()
