// index.tsx
import React from "react";
import { useWeb3React } from "@web3-react/core"
import ReactDOM from "react-dom";
import App from "./App"
// Import DAppProvider
import { ChainId, DAppProvider } from "@usedapp/core";
import { BrowserRouter } from 'react-router-dom';

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/acda238b8d434de2840394eea3ad6df3',
  },
}

{/** 
ReactDOM.render(
  <React.StrictMode>
    {/* 
       Wrap our app in the provider, config is required, 
        but can be left as an empty object: 
    *
    <DAppProvider config={{config}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

  **/}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ), document.getElementById('root'));

    
    
{/** 
export function ActivateButton() {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)
  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  )
}*/}

export function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }


  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
    </div>
  )
}
