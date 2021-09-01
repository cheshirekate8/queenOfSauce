const express = require("express");
const asyncHandler = require("express-async-handler");
const { Recipe, Ingredient, RecipeIngredients } = require("../../db/models");
const router = express.Router();


// Get all recipes
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const recipe = await Recipe.findAll({
            include: {
                model: RecipeIngredients,
                include: {
                    model: Ingredient
                }
            },
        });
        return res.json(recipe)
    })
)

// Get a recipe and all it's ingredients
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const recipeId = parseInt(req.params.id, 10);
        const recipe = await Recipe.findByPk(recipeId, {
            include: {
                model: RecipeIngredients,
                include: {
                    model: Ingredient
                }
            }
        });
        return res.json(recipe)
    })
)

// Get the ingredient version of a recipe
router.get(
    '/ingredient/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const recipeId = parseInt(req.params.id, 10);
        const recipe = await Recipe.findByPk(recipeId)
        const ingredient = await Ingredient.findOne({
            where: {
                name: recipe.name
            },
        })
        return res.json(ingredient)
    })
)




module.exports = router;
