import React from "react";
import Web3 from 'web3';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom";
import { formatEther, formatUnits } from '@ethersproject/units';
import { Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import {TLWabi} from "../abi/TimeLockedWallet";

const web3 = new Web3(Web3.givenProvider);

const TLWaddress ='0x6d52A538c662CD7c48caf5AC66aa0FA5c0De5220';
const TLW = new web3.eth.Contract(TLWabi, TLWaddress);
