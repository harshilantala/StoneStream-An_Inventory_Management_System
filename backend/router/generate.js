const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const Purchase = require('../model/purmodel'); 
const Sales = require('../model/salesmodel'); 

router.get('/generate-bill/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const purchaseData = await Purchase.findOne({ _id: id });
        const salesData = await Sales.findOne({ _id: id });

        if (!purchaseData || !salesData) {
            return res.status(404).send('No data found');
        }

        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=bill.pdf');


        doc.pipe(res);

        doc.fontSize(25).text('Invoice', { align: 'center' });
        doc.text(`Purchase Details: ${purchaseData.itemName}, Quantity: ${purchaseData.quantity}, Amount: ${purchaseData.amount}`);
        doc.text(`Sales Details: ${salesData.Item_Name}, Quantity: ${salesData.Quantity}, Amount: ${salesData.Amount}`);

        doc.end();
    } catch (error) {
        console.error('Error generating bill:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;