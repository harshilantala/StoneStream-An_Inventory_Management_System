import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2.js';
import '../styles/PurchasePage.css';

const PurchasePage = () => {
    const [formData, setFormData] = useState({
        vendorName: '',
        vendorEmail: '',
        vendorMobile: '',
        paymentMethod: '',
        itemName: '',
        quantity: '',
        amount: '',
        dateOfPurchase: ''
    });

    const [formErrors, setFormErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'amount' ? formatAmount(value) : value
        });
    };

    const formatAmount = (value) => {
        const num = value.replace(/[^\d]/g, '');
        if (!num) return '';
        if (num.length < 4) return num;

        const lastThree = num.slice(-3);
        const otherParts = num.slice(0, -3);

        const formattedNumber = otherParts
            .replace(/\B(?=(\d{2})+(?!\d))/g, ",")
            .concat("," + lastThree);

        return formattedNumber;
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.vendorName) errors.vendorName = 'Vendor Name is required';
        if (!formData.vendorEmail) errors.vendorEmail = 'Vendor Email is required';
        if (!formData.vendorMobile) errors.vendorMobile = 'Vendor Mobile is required';
        if (!formData.paymentMethod) errors.paymentMethod = 'Payment Method is required';
        if (!formData.itemName) errors.itemName = 'Item Name is required';
        if (!formData.quantity) errors.quantity = 'Quantity is required';
        if (!formData.amount) errors.amount = 'Amount is required';
        if (!formData.dateOfPurchase) errors.dateOfPurchase = 'Date of Purchase is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // If valid, handle the form data (e.g., send to a server)
            console.log('Form Data Submitted: ', formData);

            // Reset form after submission (optional)
            setFormData({
                vendorName: '',
                vendorEmail: '',
                vendorMobile: '',
                paymentMethod: '',
                itemName: '',
                quantity: '',
                amount: '',
                dateOfPurchase: ''
            });
            setFormErrors({});
        }
    };

    return (
        <div>
            <Navbar2 />
            <div className="purchase-page-wrapper">
                <div className="purchase-container">
                    <h2>Purchase Details</h2>
                    <form className="purchase-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Vendor Name</label>
                            <input
                                type="text"
                                name="vendorName"
                                value={formData.vendorName}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.vendorName && <span className="error">{formErrors.vendorName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Vendor Email</label>
                            <input
                                type="email"
                                name="vendorEmail"
                                value={formData.vendorEmail}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.vendorEmail && <span className="error">{formErrors.vendorEmail}</span>}
                        </div>
                        <div className="form-group">
                            <label>Vendor Mobile No.</label>
                            <input
                                type="tel"
                                name="vendorMobile"
                                value={formData.vendorMobile}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                required
                            />
                            {formErrors.vendorMobile && <span className="error">{formErrors.vendorMobile}</span>}
                        </div>
                        <div className="form-group">
                            <label>Payment Method</label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Payment Method</option>
                                <option value="cash">Cash</option>
                                <option value="online">Online</option>
                            </select>
                            {formErrors.paymentMethod && <span className="error">{formErrors.paymentMethod}</span>}
                        </div>
                        <div className="form-group">
                            <label>Item Name</label>
                            <input
                                type="text"
                                name="itemName"
                                value={formData.itemName}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.itemName && <span className="error">{formErrors.itemName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.quantity && <span className="error">{formErrors.quantity}</span>}
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <input
                                type="text"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.amount && <span className="error">{formErrors.amount}</span>}
                        </div>
                        <div className="form-group">
                            <label>Date of Purchase</label>
                            <input
                                type="date"
                                name="dateOfPurchase"
                                value={formData.dateOfPurchase}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.dateOfPurchase && <span className="error">{formErrors.dateOfPurchase}</span>}
                        </div>
                        <button type="submit" className="submit-btn-p">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;
