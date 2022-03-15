const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/order');


router.get('/cart', ordersCtrl.cart);

router.post('/cart/products', ordersCtrl.addToCart);

router.post('/cart/checkout', ordersCtrl.checkout);

router.put('/cart/qty', ordersCtrl.setProductQtyInCart);

module.exports = router;