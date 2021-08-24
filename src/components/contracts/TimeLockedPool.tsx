import React from "react";
import Web3 from 'web3';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom";
import { formatEther, formatUnits } from '@ethersproject/units';
import { Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import {TimeLockedPoolabi} from "../abi/TimeLockedPool";

const web3 = new Web3(Web3.givenProvider);

const TLPaddress ='0x244f2741D026C0a819438B18913Aaa4Fd6ef7f55';
const TLWP = new web3.eth.Contract(TimeLockedPoolabi, TLWPaddress);

