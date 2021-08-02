const express = require("express");
const asyncHandler = require("express-async-handler");
const { Recipe, Ingredient } = require("../../db/models");
const router = express.Router();


// Get a recipe and all it's ingredients
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const recipe = await Recipe.findAll({
            include: Ingredient
        });
        return res.json(recipe)
    })
)

// // Get a recipe and all it's ingredients
// router.get(
//     '/:id(\\d+)',
//     asyncHandler(async (req, res) => {
//         const recipeId = parseInt(req.params.id, 10);
//         const recipe = await Recipe.findByPk(recipeId, {
//             include: Ingredient
//         });
//         return res.json(recipe)
//     })
// )

// // Create a new recipe
// router.post(
//     '',
//     asyncHandler(async (req, res) => {
//         const { name, userId } = req.body;
//         const recipe = await Recipe.create({ name, userId });
//         return res.json({
//             recipe,
//         });
//     }),
// );
// // Get all of a users recipes and all their ingredients
// router.get(
//     '/user/:id(\\d+)',
//     asyncHandler(async (req, res) => {
//         const userId = parseInt(req.params.id, 10);
//         const user = await User.findByPk(userId, {
//             include: {
//                 model: Recipe,
//                 include: Ingredient
//             }
//         });
//         return res.json(user.Recipes)
//     })
// )

// router.patch(
//     '/',
//     asyncHandler(async (req, res) => {
//         const { recipeId, name } = req.body
//         const recipe = await Recipe.findByPk(recipeId);
//         const newRecipe = await recipe.update({ name: name })
//         return res.json(newRecipe)
//     })
// )

// router.delete(
//     '/:id(\\d+)',
//     asyncHandler(async (req, res) => {
//         // const { recipeId } = req.body
//         const id = parseInt(req.params.id);
//         const recipe = await Recipe.findByPk(id);
//         const recipeRows = await RecipeIngredients.findAll({
//             where: {
//                 recipeId: id
//             }
//         })
//         recipeRows.forEach(async row => {
//             await row.destroy()
//         })
//         await recipe.destroy()
//         return res.json({ message: 'success', userId: recipe.userId });
//     })
// )


module.exports = router;
