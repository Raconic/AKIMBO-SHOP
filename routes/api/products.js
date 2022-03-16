const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', productsCtrl.index)

router.post('/', ensureLoggedIn, productsCtrl.create)

router.get('/:id', productsCtrl.show)

module.exports = router;