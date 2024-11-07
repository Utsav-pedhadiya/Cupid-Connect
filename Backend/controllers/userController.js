// controllers/userController.js
const userService = require('../services/userService');

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
            device_token
        } = req.body;

        // Validate required fields
        if (!number || !otp || !name) {
            return res.status(400).json({ error: 'Required fields are missing' });
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
            device_token
        };

        const newUser = await userService.createUser(userData);
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};