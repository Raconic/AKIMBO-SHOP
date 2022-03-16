const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/order');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/cart', ensureLoggedIn, ordersCtrl.cart);

router.post('/cart/products/:id', ordersCtrl.addToCart);

router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);

router.put('/cart/qty', ensureLoggedIn, ordersCtrl.setProductQtyInCart);

module.exports = router;