const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
  drinkName: String,
  drinkPrice: Number,
  drinkAvailable: Number,
  drinkCaffeine: Boolean,
  drinkCapacity: Number,
  drinkDescription: String
})

const Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink;