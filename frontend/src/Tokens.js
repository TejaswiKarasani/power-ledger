import React from 'react';
import './Tokens.css';

const tokensData = [
  { token: 'Token 1', walletId: '0xabcdef1234567890' },
  { token: 'Token 2', walletId: '0x1234567890abcdef' },
  { token: 'Token 3', walletId: '0x567890abcdef1234' }
];

const Tokens = () => {
  return (
    <div className="tokens-container">
      <h2>Tokens List</h2>
      <ul className="tokens-list">
        {tokensData.map((tokenInfo, index) => (
          <li key={index} className="token-item">
            <div className="token-name">{tokenInfo.token}</div>
            <div className="wallet-id">{tokenInfo.walletId}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tokens;
