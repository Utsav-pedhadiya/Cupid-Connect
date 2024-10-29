// app.js
require('dotenv').config();
const express = require('express');
const otpRoutes = require('./routes/otpRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', otpRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
