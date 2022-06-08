import styled from 'styled-components';
import { ReactComponent as EthIconCmp } from '../../assets/icons/ethereum.svg';

export const ConnectBtn = styled.button`
  ${({ theme }) => theme.buttons.black}
  display: flex;
  align-items: center;
`;

export const EthIcon = styled(EthIconCmp)`
  width: auto;
  height: 1.2rem;
  margin-right: 10px;
  fill: ${({ theme }) => theme.colors.white};
`;
