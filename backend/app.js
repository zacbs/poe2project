import express from 'express'
import cors from 'cors'


const app = express()

app.use(cors())

app.use(express.json())

// Default return if no route is specified
app.get('/', (request, response) => response.send({ info: 'Poe2 Currency Exchange' }))

export default app