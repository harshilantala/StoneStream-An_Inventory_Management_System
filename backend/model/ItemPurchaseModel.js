const mongoose = require('mongoose');

const ItemPurchaseSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true
  },
  vendorEmail: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  amount: {
    type: Number,  
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  dateOfPurchase: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('ItemPurchase', ItemPurchaseSchema);