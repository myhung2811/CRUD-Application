const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        const host = await mongoose.connect(process.env.MONGO_URI);

        console.log('Connected DB...');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;