const ItemPurchase = require('../model/ItemPurchaseModel'); // Ensure the path is correct

// Controller to get all item purchases
exports.getAllItemPurchases = async (req, res) => {
  try {
    const items = await ItemPurchase.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch item purchases', error });
  }
};

// Controller to add an item purchase
exports.addItemPurchase = async (req, res) => {
  try {
    const itemPurchaseData = req.body;

    // Optional: Add validation checks here (e.g., check required fields)

    const newItemPurchase = new ItemPurchase(itemPurchaseData);
    await newItemPurchase.save();
    res.status(201).json(newItemPurchase);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item purchase', error });
  }
};