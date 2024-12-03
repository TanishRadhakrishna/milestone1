// utils/cron.js
const cron = require('node-cron');
const orders = require('../data/orders'); // Assuming orders are stored in this file

// Cron job to update order statuses every 30 seconds
cron.schedule('* * * * *', () => {
  orders.forEach(order => {
    if (order.status === 'Preparing') {
      order.status = 'Out for Delivery';
    } else if (order.status === 'Out for Delivery') {
      order.status = 'Delivered';
    }
  });
  console.log('Updated order statuses:', orders);
});
