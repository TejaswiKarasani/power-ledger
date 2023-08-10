import React from 'react';
import './AccountCreation.css';

const AccountCreation = () => {
  const handleConsumerClick = () => {
    // Handle consumer account creation
    console.log('Consumer account creation clicked');
  };

  const handleGeneratorClick = () => {
    // Handle generator account creation
    console.log('Generator account creation clicked');
  };

  return (
    <div className="account-creation">
      <h2>Create an Account</h2>
      <div className="options">
        <div className="option" onClick={handleConsumerClick}>
          <h3>Consumer Account</h3>
          <p>Create an account as an energy consumer.</p>
        </div>
        <div className="option" onClick={handleGeneratorClick}>
          <h3>Generator Account</h3>
          <p>Create an account as an energy generator.</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCreation;
