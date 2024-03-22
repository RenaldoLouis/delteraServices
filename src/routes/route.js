const express = require('express')
const app = express()
const router = express.Router();
const db = require('../services/queries')
const controller = require("../controllers/controllers")

router.get('/users', controller.get)
router.get('/users/:id', controller.getById)
router.post('/users', controller.create)
router.put('/users/:id', controller.update)
app.delete('/users/:id', db.deleteUser)

module.exports = router;