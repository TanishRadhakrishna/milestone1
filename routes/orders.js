// routes/orders.js
const express = require('express');
const router = express.Router();

const orders = require('../data/orders');
const menuItems = require('../data/menuItems');

// PlaceOrder (POST /orders)
router.post('/', (req, res) => {
  const { items } = req.body;
 

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const orderItems = items.map(itemId => menuItems.find(item => item.id === itemId));
  const newOrder = {
    id: orders.length + 1,
    items: orderItems,
    status: 'Preparing',
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// GetOrder (GET /orders/:id)
router.get('/:id', (req, res) => {
  const order = orders.find(order => order.id === parseInt(req.params.id));

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.status(200).json(order);
});

module.exports = router;
