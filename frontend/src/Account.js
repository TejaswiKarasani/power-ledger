import React from 'react';
import './Account.css';

const accountData = [
  { name: 'Consumer Account', type: 'Consumer', contracts: 5 },
  // Add more account data as needed
];

const Account = () => {
  return (
    <div className="account-container">
      <h2>Account Details</h2>
      <div className="account-list">
        {accountData.map((account, index) => (
          <div key={index} className="account-item">
            <h3>{account.name}</h3>
            <p><strong>Account Type:</strong> {account.type}</p>
            <p><strong>Number of Contracts:</strong> {account.contracts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
