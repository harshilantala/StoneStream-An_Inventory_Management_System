const Vendor = require('../model/purmodel.js'); // Import your Vendor model

exports.addVendor = async (req, res) => {
  try {
    const { vendorName, vendorEmail, paymentMethod, amount, itemName, quantity, dateOfPurchase } = req.body;

    // Ensure all required fields are provided
    if (!vendorName || !vendorEmail || !itemName || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate the quantity, amount, and dateOfPurchase
    const parsedQuantity = parseInt(quantity, 10);
    const parsedAmount = parseFloat(amount);
    const parsedDate = new Date(dateOfPurchase);

    if (isNaN(parsedQuantity) || isNaN(parsedAmount) || isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: 'Invalid data format for quantity, amount, or date' });
    }

    // Create and save the vendor purchase data in the Vendor collection
    const vendorPurchase = new Vendor({
      vendorName,
      vendorEmail,
      paymentMethod,
      amount: parsedAmount,
      itemName,
      quantity: parsedQuantity,
      dateOfPurchase: parsedDate
    });

    // Save the vendor purchase data
    await vendorPurchase.save();

    res.status(201).json({ message: 'Vendor data stored successfully' });
    
  } catch (error) {
    console.error('Error adding vendor data:', error);
    res.status(500).json({ message: 'Error processing request', error });
  }
};