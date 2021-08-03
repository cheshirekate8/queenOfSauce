const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Recipe, Ingredient, RecipeIngredients } = require("../../db/models");
const router = express.Router();


// Get a all ingredients
router.get(
    '',
    asyncHandler(async (req, res) => {
        const ingredients = await Ingredient.findAll();
        return res.json(ingredients)
    })
)

// Get a all of a user's ingredients
router.get(
    '/user/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const ingredients = await Ingredient.findAll({
            where: {
                userId: userId
            }
        });
        return res.json(ingredients)
    })
)

// Create a new ingredient
router.post(
    '',
    asyncHandler(async (req, res) => {
        const { name, imgUrl, desc, userId } = req.body;
        const ingredient = await Ingredient.create({ name, imgUrl, desc, userId });
        return res.json({
            ingredient,
        });
    }),
);

module.exports = router;
