const mongoose = require('mongoose');
const { isEmail } = require('validator');

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: [true, 'Vendor name is required'],
        trim: true
    },
    vendorEmail: {
        type: String,
        required: [true, 'Vendor email is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'online'],
        default: 'cash'
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        min: [0, 'Amount cannot be negative']
    },
    itemName: {
        type: String,
        required: [true, 'Item name is required'],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative'] // Fixed spelling
    },
    dateOfPurchase: {
        type: Date,
        required: [true, 'Date of purchase is required'],
        default: Date.now
    }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;