const express = require('express')
const router = express.Router();
const controller = require("../controllers/controllers")

router.get('/users', controller.get)
router.get('/users/:id', controller.getById)
router.post('/users', controller.create)
router.put('/users/:id', controller.update)
router.delete('/users/:id', controller.remove)

module.exports = router;