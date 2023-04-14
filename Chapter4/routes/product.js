const express = require("express");
const products = require("../controllers/product.js")

const router = express.Router();

router.get('/products', products.index);
router.get('/products/:id', products.showDetail);
router.post('/products', products.store);
router.put('/products/:id', products.update);
router.delete('/products/:id', products.destroy);

module.exports = router;