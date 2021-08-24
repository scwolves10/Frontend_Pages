import React from "react";
import Web3 from 'web3';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom";
import { formatEther, formatUnits } from '@ethersproject/units';
import { Web3ReactProvider } from '@web3-react/core'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import {FLCabi} from "../abi/FLC";

const web3 = new Web3(Web3.givenProvider);

const FLCaddress ='0x5a7c064548aede8202090DB236e01a4B1CCF1D57';
const FLC = new web3.eth.Contract(FLCabi, FLCaddress);
