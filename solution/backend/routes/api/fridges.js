const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Fridge, Ingredient } = require("../../db/models");
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


// //Get a fridge and all it's ingredients
// router.get(
//   '',
//   asyncHandler(async (req, res) => {
//     const users = await User.findAll();
//     return res.json(users)
//   })
// )

module.exports = router;
