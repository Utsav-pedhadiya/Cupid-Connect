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

exports.sendRequest = async (senderId, receiverId) => {
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
        throw new Error('Sender or receiver not found');
    }

    const existingRequest = receiver.requests.find(
        (req) => req.sender.toString() === senderId && req.status === 'pending'
    );
    if (existingRequest) {
        throw new Error('Request already sent and pending');
    }

    receiver.requests.push({ sender: senderId });
    await receiver.save();

    return { receiver, senderName: sender.name };
};

// Accept a request with sender's name in response
exports.acceptRequest = async (userId, senderId) => {
    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!user || !sender) throw new Error('User or sender not found');

    const request = user.requests.find(
        (req) => req.sender.toString() === senderId && req.status === 'pending'
    );
    if (!request) throw new Error('Pending request not found');

    request.status = 'accepted';
    await user.save();

    return { user, senderName: sender.name };
};

// Reject a request with sender's name in response
exports.rejectRequest = async (userId, senderId) => {
    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!user || !sender) throw new Error('User or sender not found');

    const request = user.requests.find(
        (req) => req.sender.toString() === senderId && req.status === 'pending'
    );
    if (!request) throw new Error('Pending request not found');

    request.status = 'rejected';
    await user.save();

    return { user, senderName: sender.name };
};