import React, { useState } from 'react';
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

  const closeModal = () => {
    setShowSuccessModal(false);
    navigate('/home');
  };

  return (
    <div className="payment-page">
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
            placeholder="1234 5678 9012 3456"
            maxLength="16"
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
        </div>
        <button type="submit" className="payment-button">
          Confirm Payment
        </button>
      </form>
      {showSuccessModal && <SuccessModal onClose={closeModal} />}
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