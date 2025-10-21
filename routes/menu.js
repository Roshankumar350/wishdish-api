const express = require('express');
const router = express.Router();
const menuData = require('../data/menu.json');


router.get('/', (req, res) => {
  const { category, isVegetarian, isPopular, page = 1, limit = 50 } = req.query;
  let items = menuData;

  if (category) {
    items = items.filter(item => item.category === category);
  }
  if (isVegetarian) {
    items = items.filter(item => item.is_vegetarian === (isVegetarian === 'true'));
  }
  if (isPopular) {
    items = items.filter(item => item.is_popular === (isPopular === 'true'));
  }

  const paginated = items.slice((page - 1) * limit, page * limit);
  res.json({
    items: paginated,
    meta: { page: Number(page), limit: Number(limit), total: items.length }
  });
});

module.exports = router;