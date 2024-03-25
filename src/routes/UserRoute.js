const express = require('express')
const router = express.Router();
const userController = require("../controllers/UserController")

router.get('/users', userController.get)
router.get('/users/:id', userController.getById)
router.post('/users', userController.create)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.remove)

module.exports = router;