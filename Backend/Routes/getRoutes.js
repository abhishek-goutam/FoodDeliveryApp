const express = require('express');

const router = express.Router();
 const {getProducts, getCart,postProduct} = require('../Controller/productController');
 const {getDishes} = require('../Controller/dishesController')

router.get('/products',getProducts);
router.get('/cart',getCart);
router.post('addDetail',postProduct)
router.get('/dishes',getDishes)

module.exports = router;