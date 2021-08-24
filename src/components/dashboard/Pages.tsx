import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits } from '@ethersproject/units';
import { Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Swap from "./Swap";
import Loan from "./Loan";
import Borrow from "./Borrow";
import Stake from "./Stake";
import Pools from "./Pools";
import Farm from "./Farm";





const Navigation = () => (
  <nav>
  
      <li><NavLink exact activeClassName="current" to='/Dashboard'>Dashboard</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Swap'>Swap</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Pool'>Pool</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Loan'>Loan</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Borrow'>Borrow</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Stake'>Stake</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Farm'>Farm</NavLink></li>
   
  </nav>
);




const Home = () => (
  <div className='Dashboard'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more Swap me.</p>
  </div>
);

const Swap = () => (
  <div className='Swap'>
    <h1>Swap Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Pool = () => (
  <div className='Pool'>
    <h1>Loan Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Loan = () => (
  <div className='Loan'>
    <h1>Loan Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Borrow = () => (
  <div className='Borrow'>
    <h1>Loan Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Stake = () => (
  <div className='Stake'>
    <h1>Loan Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Farm = () => (
  <div className='Farm'>
    <h1>Loan Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const WebPages = () => (
  <Router>

  <Switch>
    <Route exact path='/Dashboard' component={Home}></Route>
    <Route exact path='/Swap' component={Swap}><Swap /></Route>
    <Route exact path='/Pool' component={Pool}><Pool /></Route>
    <Route exact path='/Loan' component={Loan}></Route>
    <Route exact path='/Borrow' component={Borrow}><Borrow /></Route>
    <Route exact path='/Stake' component={Stake}><Stake /></Route>
    <Route exact path='/Farm' component={Farm}><Farm /></Route>
  </Switch>

  </Router>
);
export default WebPages;