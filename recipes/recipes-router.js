const express = require('express');
const router = express.Router();
const Recipes = require('./recipes-model');

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await Recipes.getRecipes());
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to get recipes', msg: err.message });
  }
});

router.get('/:id/shopping-list', async (req, res) => {
  try {
    const list = await Recipes.getShoppingList(req.params.id);
    if (list.length) {
      res.status(200).json(list);
    } else {
      res.status(404).json({ message: 'Could not find shopping list for given recipe' })
    }
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to get shopping list', msg: err.message });
  }
});

router.get('/:id/directions', async (req, res) => {
  try {
    const list = await Recipes.getInstructions(req.params.id);
    if (list.length) {
      res.status(200).json(list);
    } else {
      res.status(404).json({ message: 'Could not find directions for given recipe' })
    }
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to get directions', msg: err.message });
  }
});

module.exports = router;