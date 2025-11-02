const { fetchMenuData } = require('../services/menuService');

exports.getMenuItems = (req, res) => {
  const {
    category,
    isVegetarian,
    isPopular,
    page = 1,
    limit = 50
  } = req.query;

  let items = fetchMenuData();

  // Apply filters
  if (category) {
    items = items.filter(item => item.category === category);
  }

  if (typeof isVegetarian !== 'undefined') {
    const vegetarianFlag = isVegetarian === 'true';
    items = items.filter(item => item.is_vegetarian === vegetarianFlag);
  }

  if (typeof isPopular !== 'undefined') {
    const popularFlag = isPopular === 'true';
    items = items.filter(item => item.is_popular === popularFlag);
  }

  // Pagination
  const pageNum = Math.max(Number(page), 1);
  const limitNum = Math.max(Number(limit), 1);
  const startIndex = (pageNum - 1) * limitNum;
  const paginated = items.slice(startIndex, startIndex + limitNum);

  console.log(`[Menu] Fetched ${paginated.length} items (Page ${pageNum}, Limit ${limitNum})`);

  res.json({
    items: paginated,
    meta: {
      page: pageNum,
      limit: limitNum,
      total: items.length
    }
  });
};
