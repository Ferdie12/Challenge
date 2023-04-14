const express = require("express");
const suppliers = require("../controllers/supplier.js")

const router = express.Router();

router.get('/suppliers', suppliers.index);
router.get('/suppliers/:id', suppliers.showDetail);
router.post('/suppliers', suppliers.store);
router.put('/suppliers/:id', suppliers.update);
router.delete('/suppliers/:id', suppliers.destroy);

module.exports = router;