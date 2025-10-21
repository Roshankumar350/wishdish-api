const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Temporary root route to test
app.get('/', (req, res) => {
  res.send('WishDish API is running!');
});

app.use('/api/menu', require('./routes/menu'));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`WishDish API running on port ${PORT}`));
