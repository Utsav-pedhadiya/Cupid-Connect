// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create_account', userController.createAccount);
router.get('/get_all_users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user/send_request', userController.sendRequest);
router.post('/user/accept_request', userController.acceptRequest);
router.post('/user/reject_request', userController.rejectRequest);

module.exports = router;
