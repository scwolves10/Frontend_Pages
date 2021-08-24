import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import MainNav from "../../App";
import NavPages from "../Router";



export const mainListItems = (
  <div>
    <nav>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
   
    
      <NavLink exact activeClassName="current" to='/Dashboard'>
      <ListItemText primary="Dashboard" />
      </NavLink>
      
      

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>

     
    
      <li><NavLink exact activeClassName="current" to='/Swap'>
      <ListItemText primary="Swap" />
      </NavLink></li>
      
     

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>

     
      
      <li><NavLink exact activeClassName="current" to='/Pool'>
      <ListItemText primary="Pool" />
      </NavLink></li>
      
      

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>


      <ListItemText primary="Loan" /><NavLink exact activeClassName="current" to='/Loan'>
      </NavLink>

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      
      <ListItemText primary="Borrow" /><NavLink exact activeClassName="current" to='/Borrow'>
      </NavLink>

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>

      <ListItemText primary="Stake" /><NavLink exact activeClassName="current" to='/Stake'>
      </NavLink>

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Farm" /><NavLink exact activeClassName="current" to='/Farm'>
      </NavLink>

    </ListItem>

    </nav>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
  </div>
);


const Nav = () =>(
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
)