import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Open a connection to the database
try {
await mongoose.connect(process.env.ATLAS_DB_URL)
} catch (err) {
  console.error(err)
}
// Defining the price schema & than calling into into the Price Model
// Refered to this in the readme file, these decimals will need to be replaced with an object or a document, as this won't be one thing it will likely be a few values.

const priceSchema = new mongoose.Schema({
  currency_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Currency', required: true}],
  x_price: { type: mongoose.Schema.Types.Decimal128, required: true}, // TODO: Needs updating to object or dict type
  d_price: { type: mongoose.Schema.Types.Decimal128, required: true}, // TODO: Needs updating to object or dict type
  m_price: { type: mongoose.Schema.Types.Decimal128, required: true}, // TODO: Needs updating to object or dict type
  polled_time: { type: Date, required: true},
})

const PriceModel = mongoose.model('Price', priceSchema)

// Defining the currency schema & than calling into into the currency Model

const currencySchema = new mongoose.Schema({
  currency: { type: String, required: true}
})

const CurrencyModel = mongoose.model('Currency', currencySchema)

// Defining the x_trade schema & than calling into into the X_trade Model

const x_tradeSchema = new mongoose.Schema({
  currency_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Currency', required: true}],
  x_value: { type: mongoose.Schema.Types.Decimal128, required: true},
})

const X_tradeModel = mongoose.model('X_trade', x_tradeSchema)

// Defining the d_trade schema & than calling into into the D_trade Model

const d_tradeSchema = new mongoose.Schema({
  currency_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Currency', required: true}],
  x_value: { type: mongoose.Schema.Types.Decimal128, required: true},
})

const D_tradeModel = mongoose.model('D_trade', d_tradeSchema)

// Defining the m_trade schema & than calling into into the M_trade Model

const m_tradeSchema = new mongoose.Schema({
  currency_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Currency', required: true}],
  x_value: { type: mongoose.Schema.Types.Decimal128, required: true},
})

const M_tradeModel = mongoose.model('M_trade', m_tradeSchema)

export { PriceModel, CurrencyModel, X_tradeModel, D_tradeModel, M_tradeModel,}