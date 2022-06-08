import styled from 'styled-components';
import { ReactComponent as TwitterIconCmp } from '../../assets/icons/twitter.svg';

const twitterLightBlue = '#1d9bf0';

export const TwitterBtn = styled.button`
  ${({ theme }) => theme.buttons.defaultStyles}
  background: ${twitterLightBlue};
  color: ${({ theme }) => theme.colors.white};
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
`;

export const TwitterIcon = styled(TwitterIconCmp)`
  width: auto;
  height: 1.4rem;
  margin-right: 10px;
  fill: white;
`;
