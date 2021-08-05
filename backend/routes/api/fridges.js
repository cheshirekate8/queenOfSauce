const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
// const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Fridge, Ingredient, FridgeIngredients } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateFridge = [
    check("name")
        .isLength({ min: 3, max: 50 })
        .withMessage('Please provide a fridge name between 3 and 50 characters.'),
    handleValidationErrors
]

// Create a new fridge
router.post(
    '',
    validateFridge,
    asyncHandler(async (req, res) => {
        const { name, userId } = req.body;
        const fridge = await Fridge.create({ name, userId });
        return res.json({
            fridge,
        });
    }),
);

// Joins test
router.post(
    '/ingredients',
    asyncHandler(async (req, res) => {
        const { fridgeId, ingredientId } = req.body;
        const fridgeIng = await FridgeIngredients.create({ fridgeId, ingredientId });
        return res.json({
            fridgeIng,
        });
    }),
    );

    // Joins test
    router.delete(
        '/ingredients/:id(\\d+)',
        asyncHandler(async (req, res) => {
            // const { id } = req.body;
        const id = parseInt(req.params.id);
        const fridgeIng = await FridgeIngredients.destroy({
            where : {
                id: id
            }
         });
        return res.json({
            fridgeIng,
        });
    }),
);

// Get a fridge and all it's ingredients
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const fridgeId = parseInt(req.params.id, 10);
        const fridge = await Fridge.findByPk(fridgeId, {
            include: Ingredient
        });
        return res.json(fridge)
    })
)

// Get all of a users fridges and all their ingredients
router.get(
    '/user/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const user = await User.findByPk(userId, {
            include: {
                model: Fridge,
                include: Ingredient
            }
        });
        return res.json(user.Fridges)
    })
)

router.patch(
    '/',
    validateFridge,
    asyncHandler(async (req, res) => {
        const { fridgeId, name } = req.body
        const fridge = await Fridge.findByPk(fridgeId);
        const newFridge = await fridge.update({ name: name })
        return res.json(newFridge)
    })
)

router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        // const { fridgeId } = req.body
        const id = parseInt(req.params.id);
        const fridge = await Fridge.findByPk(id);
        const fridgeRows = await FridgeIngredients.findAll({
            where: {
                fridgeId: id
            }
        })
        fridgeRows.forEach(async row => {
            await row.destroy()
        })
        await fridge.destroy()
        return res.json({ message: 'success', userId: fridge.userId });
    })
)


module.exports = router;
