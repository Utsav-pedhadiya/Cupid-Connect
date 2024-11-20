// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    number: String,
    otp: String,
    gender: String,
    name: String,
    dob: Date,
    age: Number,
    nationality: String,
    place_of_residence: String,
    city: String,
    job: String,
    lineage: String,
    skin_color: String,
    type_of_marriage: String,
    type_of_hijab: String,
    martial_status: String,
    number_of_children: Number,
    religious_commitment: String,
    financial_situation: String,
    height: Number,
    width: Number,
    body_tone: String,
    health_status: String,
    write_about_yourself: String,
    qualities: String,
    interests: String,
    device_token: String,
    requests: [
        {
            sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
            createdAt: { type: Date, default: Date.now }
        }
    ]
});


const User = mongoose.model('User', userSchema);
module.exports = User;