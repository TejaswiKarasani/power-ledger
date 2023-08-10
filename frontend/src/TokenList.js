import React from 'react';
import './TokenList.css';

const tokenData = [
  { id: 1, name: 'Token 1' },
  { id: 2, name: 'Token 2' },
  { id: 3, name: 'Token 3' },
  // Add more token data as needed
];

const TokenList = () => {
  return (
    <div className="token-list">
      {tokenData.map((token) => (
        <div key={token.id} className="token-item">
          {token.name}
        </div>
      ))}
    </div>
  );
};

export default TokenList;
