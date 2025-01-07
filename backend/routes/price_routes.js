import { Router } from "express"
import { PriceModel } from "../db.js"

const router = Router()

// GET all prices
router.get('/', async (req, res) => res.send(await PriceModel.find().populate({ path: 'prices'})))

export default router