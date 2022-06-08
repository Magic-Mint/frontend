import { InjectedConnector } from '@web3-react/injected-connector';
import { NETWORKS } from './config/consts';

const supportedChainIds = Object.keys(NETWORKS).map((key) => Number(key));

export const injectedConnector = new InjectedConnector({
  supportedChainIds: supportedChainIds,
});
