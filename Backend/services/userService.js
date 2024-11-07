// services/userService.js
const User = require('../models/userModel');

exports.createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

exports.getAllUsers = async () => {
    const users = await User.find();
    return users;
};

exports.getUserById = async (userId) => {
    const user = await User.findById(userId);
    return user;
};
