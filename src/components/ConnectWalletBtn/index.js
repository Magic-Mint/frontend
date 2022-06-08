import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../../wallet-connectors';
import { ConnectBtn, EthIcon } from './styles';
import { trimAddress } from '../../utils/helperFunctions';

const ConnectWalletBtn = () => {
  const { account, activate } = useWeb3React();

  const connectWallet = async () => {
    if (!window.ethereum) {
      window.open('https://metamask.io/download/', '_blank');
    }
    if (account) {
      return;
    }
    await activate(injectedConnector);
  };

  return (
    <ConnectBtn onClick={connectWallet}>
      <EthIcon />
      {!account ? 'Connect Wallet' : trimAddress(account)}
    </ConnectBtn>
  );
};

export default ConnectWalletBtn;
