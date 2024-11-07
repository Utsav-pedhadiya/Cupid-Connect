// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create_account', userController.createAccount);
router.get('/get_all_users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);

module.exports = router;
