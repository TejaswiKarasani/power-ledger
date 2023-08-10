import React from 'react';
import './Transaction.css';

const transactionData = [
  { date: '2023-08-01', amount: '$100' },
  { date: '2023-08-05', amount: '$200' },
  { date: '2023-08-10', amount: '$150' },
  // Add more transaction data as needed
];

const Transaction = ({ consumerName, generatorName }) => {
  return (
    <div className="transaction-container">
      <h2>Transaction History</h2>
      <h3>Consumer: {consumerName}</h3>
      <h3>Generator: {generatorName}</h3>
      <div className="transaction-list">
        {transactionData.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <p><strong>Date:</strong> {transaction.date}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
