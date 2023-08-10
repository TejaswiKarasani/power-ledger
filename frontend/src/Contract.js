import {React} from 'react';
import './Contract.css';

const contractData = [
  { consumer: 'Alice Smith', generator: 'Wind Energy Inc.', expiryDate: '2024-06-15', lastPayment: '$350' },
  // Add more contract data as needed
];

const Contract = () => {

  const handleViewTransactions = () => {
    // Handle viewing transactions for the selected contract
    window.location.href = '/transcation';
  };

  return (
    <div className="contract-container">
      <h2>Contract Details</h2>
      <div className="contract-list">
        {contractData.map((contract, index) => (
          <div key={index} className="contract-item">
            <h3>Contract {index + 1}</h3>
            <p><strong>Consumer:</strong> {contract.consumer}</p>
            <p><strong>Generator:</strong> {contract.generator}</p>
            <p><strong>Expiry Date:</strong> {contract.expiryDate}</p>
            <p><strong>Last Payment:</strong> {contract.lastPayment}</p>
            <button onClick={() => handleViewTransactions()}>View Transactions</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contract;
