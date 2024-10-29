// services/otpService.js
const otpUtils = require('../utils/otpUtils');

exports.generateOtpForPhone = (phoneNumber) => {
    const otp = otpUtils.generateOtp();
    // Here, you would typically store the OTP in a database with the phone number
    console.log(`OTP for ${phoneNumber} is ${otp}`);
    return otp;
};
