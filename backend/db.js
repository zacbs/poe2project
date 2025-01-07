import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Open a connection to the database
await mongoose.connect(process.env.ATLAS_DB_URL)

// Defining the prices schema

const priceSchema = new mongoose.Schema({
  currency_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Currency', required: true}],
  x_price: { type: mongoose.Schema.Types.Decimal128, required: true},
  d_price: { type: Schema.Types.Decimal128, required: true},
  m_price: { type: Schema.Types.Decimal128, required: true},
  polled_time: { type: Date, required: true},
})

// Defining the Price model from the schema
const PriceModel = mongoose.model('Price', priceSchema)