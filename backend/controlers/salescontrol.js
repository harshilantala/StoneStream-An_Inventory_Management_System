const Sale = require('../model/salesmodel'); // Import your Sale model
const Vendor = require('../model/purmodel'); // Import your Vendor model

// Controller to add a sale
exports.addSale = async (req, res) => {
  try {
    const { Customer_Name, Customer_Email, Payment_Method, Item_Name, Quantity, Amount, Date: saleDate } = req.body;

    // Ensure all required fields are provided
    if (!Customer_Name || !Customer_Email || !Item_Name || !Quantity || !Amount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate the quantity, amount, and date
    const parsedQuantity = parseInt(Quantity, 10);
    const parsedAmount = parseFloat(Amount);
    const parsedDate = saleDate ? new Date(saleDate) : new Date(); // Use the provided date or the current date

    if (isNaN(parsedQuantity) || isNaN(parsedAmount) || isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: 'Invalid data format for quantity, amount, or date' });
    }

    // Find vendor records for the item being sold, skipping entries with 0 quantity
    let remainingQuantity = parsedQuantity;
    const vendors = await Vendor.find({ itemName: Item_Name, quantity: { $gt: 0 } }).sort({ dateOfPurchase: 1 }); // Sort by date to use oldest stock first

    // Subtract quantity from vendor records
    for (const vendor of vendors) {
      if (remainingQuantity <= 0) break;

      if (vendor.quantity >= remainingQuantity) {
        vendor.quantity -= remainingQuantity;
        remainingQuantity = 0; // All quantity has been accounted for
      } else {
        remainingQuantity -= vendor.quantity;
        vendor.quantity = 0; // Vendor's stock depleted
      }

      await vendor.save(); // Save updated vendor record
    }

    // Check if there is still remaining quantity to account for
    if (remainingQuantity > 0) {
      return res.status(400).json({ message: 'Insufficient quantity available in vendor stock' });
    }

    // Create and save the sale data in the Sale collection
    const sale = new Sale({
      Customer_Name,
      Customer_Email,
      Payment_Method,
      Item_Name,
      Quantity: parsedQuantity,
      Amount: parsedAmount,
      Date: parsedDate
    });

    // Save the sale data
    await sale.save();

    res.status(201).json({ message: 'Sale data stored successfully' });

  } catch (error) {
    console.error('Error adding sale data:', error);
    res.status(500).json({ message: 'Error processing request', error });
  }
};

// Controller to get all sales (sales history)
exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find({});
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch sales history', error });
  }
};