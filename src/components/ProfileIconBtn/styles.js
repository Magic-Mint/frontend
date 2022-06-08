import styled from 'styled-components';
import { ReactComponent as TriangleIconCmp } from '../../assets/icons/triangle.svg';

export const Wrapper = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
  border: 0;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  ${({ theme }) => theme.shadows.boxShadowDark};
  :hover {
    cursor: pointer;
  }
`;

export const PopUpMenu = styled.div`
  min-width: 12rem;
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  box-shadow: 0px 5px 15px 0px ${({ theme }) => theme.colors.frenchLilac};
`;

export const TriangleIcon = styled(TriangleIconCmp)`
  height: 1.5rem;
  width: auto;
  position: absolute;
  right: 0.75rem;
  top: -1rem;
  filter: drop-shadow(${({ theme }) => theme.colors.frenchLilac} 0px -1px 0.5px);
  fill: ${({ theme }) => theme.colors.gray};
`;

export const PopUpItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.875rem 1rem;
  ${({ theme }) => theme.typography.subheading}
  font-size: 1.1rem;
  svg {
    height: 1.5rem;
    width: auto;
    fill: ${({ theme }) => theme.colors.black};
    margin-right: 10px;
  }
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
