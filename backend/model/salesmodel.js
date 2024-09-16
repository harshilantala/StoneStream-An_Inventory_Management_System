const mongoose = require('mongoose');
const { isEmail } = require('validator');

const salesSchema = new mongoose.Schema({
  Customer_Name: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true
  },
  Customer_Email: {
    type: String,
    required: [true, 'Please enter an email'],
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
    index: true // Adding an index for faster querying by email if needed
  },
  Payment_Method: {
    type: String,
    enum: ['cash', 'online'],
    default: 'cash'
  },
  Item_Name: {
    type: String,
    required: [true, 'Item name is required'],
    trim: true,
    index: true // Keeping the index on Item_Name for optimized queries
  },
  Quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity cannot be less than 1']
  },
  Amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [1, 'Amount cannot be less than 1']
  },
  Date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

salesSchema.methods.calculateTotalAmount = function(taxRate) {
  return this.Amount + (this.Amount * taxRate);
};

const Sale = mongoose.model('Sale', salesSchema);

module.exports = Sale;