import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Tokens from "./Tokens";
import LandingPage from "./LandingPage";
import AccountCreation from './AccountCreation';
import Account from './Account';
import Contract from './Contract';
import Transcation from './Transcation';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar className='navBar'></NavBar>
    <div className='home'>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/tokens" element={<Tokens/>}></Route>
      <Route path="/accountCreation" element={<AccountCreation/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/contract" element={<Contract/>}></Route>
      <Route path="/transcation" element={<Transcation consumerName={'Alice Smith'} generatorName={'Wind Energy Inc.'}></Transcation>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
