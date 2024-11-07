// routes/otpRoutes.js
const express = require('express');
const otpController = require('../controllers/otpController');

const router = express.Router();

router.post('/generate_otp', otpController.generateOtp);
router.post('/generate_otp', otpController.generateOtp);

module.exports = router;
