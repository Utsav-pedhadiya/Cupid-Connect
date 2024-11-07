// app.js
require('dotenv').config();
const express = require('express');
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.use(express.json());
app.use('/api', otpRoutes, userRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
