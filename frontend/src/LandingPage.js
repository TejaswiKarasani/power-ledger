import React from 'react';
import './LandingPage.css';
import TokenList from './TokenList';
import AnimatedTitle from './AnimatedTItle';

const tokens = [
  'Token 1',
  'Token 2',
  'Token 3',
  'Token 4',
  'Token 5',
];

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        {/* <h1 className="landing-title">Welcome to PPA platform</h1> */}
    <AnimatedTitle/>
        <TokenList/>
        {/* <div className="token-list">
          <ul>
            {tokens.map((token, index) => (
              <li key={index} className="token-item">
                {token}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
