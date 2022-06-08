import styled from 'styled-components';
import { headerHeight } from '../../../config/consts';
import { styledLinkStyles } from '../../ui/ActiveNavLink/styles';
import { ReactComponent as PlusIconCmp } from '../../../assets/icons/plus.svg';
import { ReactComponent as CloseIconCmp } from '../../../assets/icons/close.svg';

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderWrapper = styled.div`
  height: ${headerHeight};
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.frenchLilac};
  padding-left: 1.375rem;
  padding-right: 2rem;
  z-index: 100;
`;

export const Logo = styled.img`
  height: auto;
  width: 220px;
`;

export const NavsWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const LeftMenu = styled.ul`
  display: flex;
  margin-left: 10px;
`;

export const LeftMenuItem = styled.li``;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledOutsideLink = styled.a`
  ${styledLinkStyles}
`;

export const CreateCampaignBtn = styled.button`
  ${({ theme }) => theme.buttons.chartreuse}
  display: flex;
  align-items: center;
`;

export const PlusIcon = styled(PlusIconCmp)`
  width: auto;
  height: 1rem;
  margin-right: 10px;
`;

export const Warning = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.light}
  font-size: 0.875rem;
  padding: 7px 0;
  background-color: #f1c40f;
  color: ${({ theme }) => theme.colors.black};
`;

export const CloseIcon = styled(CloseIconCmp)`
  width: auto;
  height: 0.875rem;
  margin-left: 15px;
  fill: ${({ theme }) => theme.colors.black};

  :hover {
    cursor: pointer;
  }
`;
