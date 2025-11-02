require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const logger = require('./middleware/logger');

app.use(logger);

// Health check
app.get('/', (req, res) => {
  res.send('WishDish API is running!');
});

// Routes
const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`WishDish API running on port ${PORT}`));
