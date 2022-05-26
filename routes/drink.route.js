const {
  Router
} = require('express');
const {
  drinkController
} = require('../controllers/drink.controller.js');

const router = Router();

router.get('/drinks', drinkController.getDrink)
router.get('/drinks/in-stock', drinkController.getDrinkInStock)
router.get('/drinks/:id', drinkController.getDrinkById)
router.post('/drinks', drinkController.postDrink)
router.delete('/drinks/:id', drinkController.deleteDrinkById)
router.patch('/drinks/:id', drinkController.patchDrinkById)

module.exports = router;