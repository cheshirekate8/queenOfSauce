const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { Ingredient } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateIngredient = [
    check("name")
        .isLength({ min: 3, max: 30 })
        .withMessage('Please provide an ingredient name between 3 and 50 characters.'),
    check("imgUrl")
        .isURL()
        // .isMimeType('jpg')
        .withMessage('Please provide a valid image URL'),
    check("desc")
        .isLength({ min: 3, max: 100 })
        .withMessage('Please provide a description between 3 and 100 characters.'),
    handleValidationErrors
]

// Get a all ingredients
router.get(
    '',
    asyncHandler(async (req, res) => {
        const ingredients = await Ingredient.findAll();
        return res.json(ingredients)
    })
)

// Get a single ingredient
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const ingredientId = parseInt(req.params.id, 10);
        const ingredient = await Ingredient.findByPk(ingredientId);
        return res.json(ingredient)
    })
)

// Edit a single ingredient
router.patch(
    '/:id(\\d+)',
    validateIngredient,
    asyncHandler(async (req, res) => {
        const ingredientId = parseInt(req.params.id, 10);
        const ingredient = await Ingredient.findByPk(ingredientId);
        const { name, imgUrl, desc, userId } = req.body;

        await ingredient.update({ name, imgUrl, desc, userId })
        return res.json(ingredient)
    })
)

// Get a all of a user's custom ingredients
// router.get(
//     '/user/:id(\\d+)',
//     asyncHandler(async (req, res) => {
//         const userId = parseInt(req.params.id, 10);
//         const ingredients = await Ingredient.findAll({
//             where: {
//                 userId: userId
//             }
//         });
//         return res.json(ingredients)
//     })
// )

// Create a new ingredient
router.post(
    '',
    validateIngredient,
    asyncHandler(async (req, res) => {
        const { name, imgUrl, desc, userId } = req.body;
        const ingredient = await Ingredient.create({ name, imgUrl, desc, userId });
        return res.json({
            ingredient,
        });
    }),
);

// Delete a single ingredient
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const ingredientId = parseInt(req.params.id, 10);
        const ingredient = await Ingredient.findByPk(ingredientId);
        await ingredient.destroy()
        return res.json({ message: 'success', userId: ingredient.userId })
    })
)
module.exports = router;
