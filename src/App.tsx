import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits } from '@ethersproject/units';
import ConnectButton from "./components/ConnectButton";
import { Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import NavPages from "./Router";

/*
import { GlobalStyle } from './global/GlobalStyle'
import { Balance } from './pages/Balance'
import { Prices } from './pages/Prices'
import { Block } from './dashboard/dapp/Loan'
import { Tokens } from './pages/Tokens'
import { Transactions } from './pages/Transactions'
import { SendEtherPage } from './pages/SendEtherPage'
import { NotificationsList } from './components/Transactions/History'
*/
const queryClient = new QueryClient();


const App = () => {
  return (
    <div>
      
      
      <Dashboard />
      <Navigation />
        <MainNav />

    </div>
  );
}
export default App;



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

const MainNav = () => (
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

