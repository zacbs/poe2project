import { ObjectId } from "mongodb"
import { CurrencyModel, dbClose } from "./db.js"

const currencyNames = [
  {
    _id: new ObjectId(),
    currency: "Transmutation Shard",
    order: 1
  },
  {
    _id: new ObjectId(),
    currency: "Chance Shard",
    order: 2
  },
  {
    _id: new ObjectId(),
    currency: "Regal Shard",
    order: 3
  },
  {
    _id: new ObjectId(),
    currency: "Artificer's Shard",
    order: 4
  },
  {
    _id: new ObjectId(),
    currency: "Scroll of Wisdom",
    order: 5
  },
  {
    _id: new ObjectId(),
    currency: "Orb of Transmutation",
    order: 6
  },
  {
    _id: new ObjectId(),
    currency: "Orb of Augmentation",
    order: 7
  },
  {
    _id: new ObjectId(),
    currency: "Orb of Chance",
    order: 8
  },
  {
    _id: new ObjectId(),
    currency: "Orb of Alchemy",
    order: 9
  },
  {
    _id: new ObjectId(),
    currency: "Chaos Orb",
    order: 10
  },
  {
    _id: new ObjectId(),
    currency: "Vaal Orb",
    order: 11
  },
  {
    _id: new ObjectId(),
    currency: "Regal Orb",
    order: 12
  },
  {
    _id: new ObjectId(),
    currency: "Exalted Orb",
    order: 13
  },
  {
    _id: new ObjectId(),
    currency: "Divine Orb",
    order: 14
  },
  {
    _id: new ObjectId(),
    currency: "Orb of Annulment",
    order: 15
  },
  {
    _id: new ObjectId(),
    currency: "Artificer's Orb",
    order: 16
  },
  {
    _id: new ObjectId(),
    currency: "Mirror of Kalandra",
    order: 17
  },
  {
    _id: new ObjectId(),
    currency: "Armourer's Scrap",
    order: 18
  },
  {
    _id: new ObjectId(),
    currency: "Blacksmith's Whetstone",
    order: 19
  },
  {
    _id: new ObjectId(),
    currency: "Arcanist's Etcher",
    order: 20
  },
  {
    _id: new ObjectId(),
    currency: "Glassblower's Bauble",
    order: 21
  },
  {
    _id: new ObjectId(),
    currency: "Gemcutter's Prism",
    order: 22
  },
]

await CurrencyModel.deleteMany()
console.log('Deleted Currencys')
await CurrencyModel.insertMany(currencyNames)
console.log('Inserted Currencys')

dbClose()