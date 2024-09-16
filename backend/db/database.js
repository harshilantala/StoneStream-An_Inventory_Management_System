const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nand_05:Nand%402005@inventory.p7kgevl.mongodb.net/?authSource=WEB_STONESTREAM&authMechanism=SCRAM-SHA-1', {
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;