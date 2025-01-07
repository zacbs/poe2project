import express from 'express'
import cors from 'cors'
import priceRoutes from './routes/price_routes.js'


const app = express()

app.use(cors())

app.use(express.json())

// Default return if no route is specified
app.get('/', (request, response) => response.send({ info: 'Poe2 Currency Exchange' }))

app.use('/prices', priceRoutes)

app.use('/currencys', priceRoutes)

export default app