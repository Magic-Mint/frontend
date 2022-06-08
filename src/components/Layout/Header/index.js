import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/User';
import ActiveNavLink from '../../ui/ActiveNavLink';
import ConnectWalletBtn from '../../ConnectWalletBtn';
import ProfileIconBtn from '../../ProfileIconBtn';
import AuthTwitterBtn from '../../AuthTwitterBtn';
import {
  Wrapper,
  HeaderWrapper,
  Logo,
  NavsWrapper,
  LeftMenu,
  RightMenu,
  StyledOutsideLink,
  LeftMenuItem,
  CreateCampaignBtn,
  PlusIcon,
  Warning,
  CloseIcon,
} from './styles';

import logo from '../../../assets/images/logo-fullColor.png';
import { NETWORKS } from '../../../config/consts';
import { injectedConnector } from '../../../wallet-connectors';
import { ethers } from 'ethers';
import { NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

const nav = {
  claimNft: {
    label: 'Claim NFTs',
    link: '/claimNfts',
  },
  playgrounds: {
    label: 'Playgrounds',
    link: 'https://playgrounds.wtf/',
    target: '_blank',
  },
};

const supportedChainId = Number(process.env.REACT_APP_SUPPORTED_CHAIN_ID);
const targetChain = NETWORKS[supportedChainId];

function getErrorMessage(ethereum, error, currentChainId) {
  if (!ethereum) {
    return 'No Ethereum browser extension detected, please install MetaMask.';
  }
  if (error instanceof UnsupportedChainIdError || (currentChainId && currentChainId !== supportedChainId)) {
    const currentChain = NETWORKS[currentChainId] ?? 'test network';
    return `Your wallet is connected to the ${currentChain}. To use MagicMint, please switch to ${targetChain}.`;
  }
  if (error instanceof UserRejectedRequestError) {
    return 'Please authorize this website to access your Ethereum account.';
  }
  return '';
}

const Header = () => {
  const { user } = useUser();
  const { error, chainId } = useWeb3React();
  const [warning, setWarning] = useState('');

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && !error && chainId === supportedChainId) {
      setWarning('');
      return;
    }
    setWarning(getErrorMessage(ethereum, error, chainId));
  }, [error, chainId]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <NavsWrapper>
          <LeftMenu>
            {user && (
              <>
                <LeftMenuItem>
                  <ActiveNavLink to={nav.claimNft.link}>{nav.claimNft.label}</ActiveNavLink>
                </LeftMenuItem>
              </>
            )}
            <LeftMenuItem>
              <StyledOutsideLink
                href={nav.playgrounds.link}
                target="_blank">
                {nav.playgrounds.label}
              </StyledOutsideLink>
            </LeftMenuItem>
          </LeftMenu>
          <RightMenu>
            {user ? (
              <>
                <CreateCampaignBtn>
                  <PlusIcon />
                  Create Campagin
                </CreateCampaignBtn>
                <ConnectWalletBtn />
                <ProfileIconBtn />
              </>
            ) : (
              <>
                <AuthTwitterBtn />
              </>
            )}
          </RightMenu>
        </NavsWrapper>
      </HeaderWrapper>
      {warning !== '' && (
        <Warning>
          {warning}
          <CloseIcon onClick={() => setWarning('')} />
        </Warning>
      )}
    </Wrapper>
  );
};

export default Header;
