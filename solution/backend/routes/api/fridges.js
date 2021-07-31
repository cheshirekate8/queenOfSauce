const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Fridge, Ingredient, FridgeIngredients } = require("../../db/models");
const router = express.Router();

// Create a new fridge
router.post(
    '',
    asyncHandler(async (req, res) => {
        const { name, userId } = req.body;
        const fridge = await Fridge.create({ name, userId });
        return res.json({
            fridge,
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
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const {fridgeId, name} = req.body
        const fridge = await Fridge.findByPk(fridgeId);
        const newFridge = await fridge.update({name: name})
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
        return res.json({ message: 'success' });
    })
)


// //Get a fridge and all it's ingredients
// router.get(
//   '',
//   asyncHandler(async (req, res) => {
//     const users = await User.findAll();
//     return res.json(users)
//   })
// )

module.exports = router;
