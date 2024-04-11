import React, { useState } from 'react';
import api from "../api";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './payment.css'; 

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentSubmission = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleBack = () => {
    navigate('/home'); // 假设'/'是首页的路由
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    navigate('/order');
  };

  const changeOrderStatus = () => {
    api
      .post("/order/update/")
      .then((res) => {
        if (res.status === 200) alert("Order status updated successfully");
        else alert("Failed to update order status");
        closeModal();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="payment-page">
      <button className="back-button" onClick={handleBack}>Back</button>
      <h1>Payment Information</h1>
      <form onSubmit={handlePaymentSubmission}>
      <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            placeholder="xxxx xxxx xxxx xxxx"
            maxLength="19"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiration Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            placeholder="123"
            maxLength="3"
            required
          />
          <button type="submit" className="payment-button">
          Confirm Payment
        </button>
        </div>
    
      </form>
      {showSuccessModal && <SuccessModal onClose={changeOrderStatus} />}
    </div>
  );
}

function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Payment Successful</h2>
        <p>Your payment has been processed successfully.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default PaymentPage;