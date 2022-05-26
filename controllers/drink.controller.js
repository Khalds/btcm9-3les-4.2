const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/Drink.model")
const Drink = require("../models/Drink.model")

module.exports.drinkController = {
  getDrink: (req, res) => {
    Drink.find({}).select('_id drinkName drinkPrice')
      .then((data) => {
        res.json(data)
      })
      .catch((err) => res.json("Ошибка при получении напитков"))
  },
  getDrinkInStock: (req, res) => {
    Drink.find({
      drinkAvailable: {
        $gt: 0,
      },
    }).then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении напитков"))
  },
  getDrinkById: (req, res) => {
    Drink.findById(req.params.id).then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении напитка"))
  },
  postDrink: (req, res) => {
    Drink.create({
      drinkName: req.body.drinkName,
      drinkPrice: req.body.drinkPrice,
      drinkAvailable: req.body.drinkAvailable,
      drinkCaffeine: req.body.drinkCaffeine,
      drinkCapacity: req.body.drinkCapacity,
      drinkDescription: req.body.drinkDescription,
    }).then(() => {
      res.json("Напиток добавлен")
    }).catch((err) => res.json("Ошибка при добавлении напитка"))
  },
  deleteDrinkById: (req, res) => {
    Drink.findByIdAndRemove(req.params.id).then(() => {
      res.json("Напиток удален")
    }).catch((err) => res.json("Ошибка при удалении напитка"))
  },
  patchDrinkById: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      drinkName: req.body.drinkName,
      drinkPrice: req.body.drinkPrice,
      drinkAvailable: req.body.drinkAvailable,
      drinkCaffeine: req.body.drinkCaffeine,
      drinkCapacity: req.body.drinkCapacity,
      drinkDescription: req.body.drinkDescription,
    }).then(() => {
      res.json("Напиток изменен")
    }).catch((err) => res.json("Ошибка при изменении напитка"))
  },
}