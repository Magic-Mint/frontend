import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import { injectedConnector } from '../wallet-connectors';

function useEagerConnect() {
  const { activate } = useWeb3React();

  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injectedConnector);
      }
    });
  }, []);
}

function useInactiveListener() {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) return;
    const handleChainChanged = (chainId) => {
      window.location.reload();
    };
    const handleAccountsChanged = (accounts) => {
      console.log("Handling 'accountsChanged' event with payload", accounts);
      if (accounts.length > 0) {
        // activate(injectedConnector);
      }
    };
    const handleNetworkChanged = (networkId) => {
      window.location.reload();
    };

    ethereum.on('chainChanged', handleChainChanged);
    //   ethereum.on('accountsChanged', handleAccountsChanged);
    // ethereum.on('networkChanged', handleNetworkChanged);

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener('chainChanged', handleChainChanged);
        //   ethereum.removeListener('accountsChanged', handleAccountsChanged);
        // ethereum.removeListener('networkChanged', handleNetworkChanged);
      }
    };
  }, [active, error, activate]);
}

export default function useSetWeb3() {
  useEagerConnect();
  useInactiveListener();
}
