const express = require("express");
const components = require("../controllers/component.js")

const router = express.Router();

router.get('/components', components.index);
router.get('/components/:id', components.showDetail);
router.post('/components', components.store);
router.put('/components/:id', components.update);
router.delete('/components/:id', components.destroy);

module.exports = router;