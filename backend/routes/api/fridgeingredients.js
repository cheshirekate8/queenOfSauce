const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { User, Fridge, Ingredient, FridgeIngredients } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateFridgeIng = [
    check("quantity")
        .isInt({ min: 1, max: 999 })
        .withMessage('You can have between 1 and 999 of an ingredient, please enter a valid number.'),
    handleValidationErrors
]

//Add Ingredient to a Fridge
router.post(
    '',
    validateFridgeIng,
    asyncHandler(async (req, res) => {
        const { ingredientId, fridgeId, quantity } = req.body;
        const checker = await FridgeIngredients.findAll({
            where: {
                fridgeId: fridgeId,
                ingredientId: ingredientId
            }
        })

        if (!checker.length) {
            //create it
            const fridgeIng = await FridgeIngredients.create({ ingredientId, fridgeId, quantity });
            return res.json(fridgeIng);
        } else {
            //add it to quantity
            const newQuantity = checker[0].quantity += Number(quantity)
            await checker[0].update({ quantity: newQuantity })
            return res.json(checker)
            // checker_ = Number(checker[0].quantity)
            // quantity = Number(quantity)
            // const newQuantity = checker_ += quantity
            // await checker[0].update({ quantity: newQuantity })
            // return res.json(checker)
        }
    }),
);

//Edit the quantity of an ingredient in a fridge
router.patch(
    '/',
    validateFridgeIng,
    asyncHandler(async (req, res) => {
        const { fridgeIngredientId, quantity } = req.body
        const fridgeIngredient = await FridgeIngredients.findByPk(fridgeIngredientId);
        const newQuantity = await fridgeIngredient.update({ quantity: quantity })
        return res.json(newQuantity)
    })
)

//Delete an ingredient from your fridge
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id);
        const fridgeIng = await FridgeIngredients.findByPk(id);
        await fridgeIng.destroy()
        return res.json({ message: 'success' });
    })
)


module.exports = router;
