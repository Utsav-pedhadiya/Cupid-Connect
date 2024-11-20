// controllers/userController.js
const userService = require("../services/userService");
const User = require("../models/userModel");

exports.createAccount = async (req, res) => {
  try {
    const {
      number,
      otp,
      gender,
      name,
      dob,
      age,
      nationality,
      place_of_residence,
      city,
      job,
      lineage,
      skin_color,
      type_of_marriage,
      type_of_hijab,
      martial_status,
      number_of_children,
      religious_commitment,
      financial_situation,
      height,
      width,
      body_tone,
      health_status,
      write_about_yourself,
      qualities,
      interests,
      device_token,
    } = req.body;

    // Validate required fields
    if (!number || !otp || !name) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    const userData = {
      number,
      otp,
      gender,
      name,
      dob,
      age,
      nationality,
      place_of_residence,
      city,
      job,
      lineage,
      skin_color,
      type_of_marriage,
      type_of_hijab,
      martial_status,
      number_of_children,
      religious_commitment,
      financial_situation,
      height,
      width,
      body_tone,
      health_status,
      write_about_yourself,
      qualities,
      interests,
      device_token,
    };

    const newUser = await userService.createUser(userData);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId  = req.params.id;

    // Find the user and populate sender's name in the requests array
    const user = await User.findById(userId)
      .populate("requests.sender", "name")
      .exec();


    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "User details retrieved successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    if (!senderId || !receiverId) {
      return res
        .status(400)
        .json({ error: "Sender and receiver IDs are required" });
    }

    const { receiver, senderName } = await userService.sendRequest(
      senderId,
      receiverId
    );
    res.status(200).json({
      message: "Request sent successfully",
      receiver,
      senderName,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Accept a request
exports.acceptRequest = async (req, res) => {
  try {
    const { userId, senderId } = req.body;
    if (!userId || !senderId) {
      return res
        .status(400)
        .json({ error: "User ID and sender ID are required" });
    }

    const { user, senderName } = await userService.acceptRequest(
      userId,
      senderId
    );
    res.status(200).json({
      message: "Request accepted successfully",
      user,
      senderName,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Reject a request
exports.rejectRequest = async (req, res) => {
  try {
    const { userId, senderId } = req.body;
    if (!userId || !senderId) {
      return res
        .status(400)
        .json({ error: "User ID and sender ID are required" });
    }

    const { user, senderName } = await userService.rejectRequest(
      userId,
      senderId
    );
    res.status(200).json({
      message: "Request rejected successfully",
      user,
      senderName,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
