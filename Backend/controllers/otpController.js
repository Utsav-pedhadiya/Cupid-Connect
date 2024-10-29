// controllers/otpController.js
const otpService = require('../services/otpService');

exports.generateOtp = (req, res) => {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
        return res.status(400).json({ error: 'Phone number is required' });
    }
    const otp = otpService.generateOtpForPhone(phoneNumber);
    res.status(200).json({ otp });
};
