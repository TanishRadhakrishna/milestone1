// routes/menu.js
const express = require('express');
const router = express.Router();

const menuItems = require('../data/menuItems');

// AddMenuItem (POST /menu)
router.post('/', (req, res) => {
    const { name, price, category } = req.body;
    
    if (!name || !price || !category) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newMenuItem = {
        id: menuItems.length + 1,
        name,
        price,
        category,
    };
    
    menuItems.push(newMenuItem);
    res.status(201).json(newMenuItem);
});

// GetMenu (GET /menu)
router.get('/', (req, res) => {
  res.status(200).json(menuItems);
});

module.exports = router;
