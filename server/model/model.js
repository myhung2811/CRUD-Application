const mongoose = require('mongoose');

const userDB = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    gender: String,
    status: String
})

const UserDB = mongoose.model('userdb', userDB);

module.exports = UserDB;