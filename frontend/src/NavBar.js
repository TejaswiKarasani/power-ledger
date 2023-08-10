import React from 'react';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="tab-list">
        <li className="tab-item"><a href="/">Home</a></li>
        <li className="tab-item"><a href="/tokens">Tokens</a></li>
        <li className="tab-item"><a href="/AccountCreation">Account Creation</a></li>
        <li className="tab-item"><a href="/contract">Contract</a></li>
        <li className="tab-item"><a href="/transcation">Transactions</a></li>
        <li className="tab-item"><a href="/account">Profile</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
