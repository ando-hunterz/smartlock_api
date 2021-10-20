require('dotenv').config();

const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGODB_URI)
    .then(res => console.log('db-connected'))
    .catch(err => console.log(err));
