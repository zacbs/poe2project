import { Router } from "express"
import { CurrencyModel } from "../db.js"

const router = Router()

// GET all currency
router.get('/', async (req, res) => res.send(await CurrencyModel.find().populate({ path: 'currencys'})))

export default router