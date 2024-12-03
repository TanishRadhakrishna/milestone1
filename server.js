// server.js
const express = require('express');
const cors = require('cors');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
require('./utils/cron'); // To start the cron job for updating order statuses

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Food delivery backend running on http://localhost:${port}`);
});
