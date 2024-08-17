import React from 'react';

const Order = () => {
  return (
    <div className="order-section">
      <h1>Purchase Your Favorite Books</h1>
      <div className="order-form">
        <div className="form-group">
          <label htmlFor="book-select">Select Book:</label>
          <select id="book-select">
            <option value="book1">Book Title 1</option>
            <option value="book2">Book Title 2</option>
            <option value="book3">Book Title 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" defaultValue="1" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address:</label>
          <input type="text" id="address" placeholder="Enter your shipping address" />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method:</label>
          <select id="payment">
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
            {/* Add more payment methods if needed */}
          </select>
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </div>
    </div>
  );
};

export default Order;