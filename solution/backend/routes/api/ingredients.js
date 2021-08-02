const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Recipe, Ingredient, RecipeIngredients } = require("../../db/models");
const router = express.Router();


// Get a recipe and all it's ingredients
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const ingredients = await Ingredient.findAll();
        return res.json(ingredients)
    })
)

module.exports = router;
