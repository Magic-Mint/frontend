import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const onHoverAndActiveNavLink = css`
  font-size: 1.22rem;
  ${({ theme }) => theme.typography.subheading}
`;

export const styledLinkStyles = css`
  ${({ theme }) => theme.typography.regular}
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 10px;
  :hover {
    ${onHoverAndActiveNavLink}
  }
  transition: ease-in 250ms;
`;

export const StyledNavLink = styled(Link)`
  ${styledLinkStyles}
  ${({ isActive }) => isActive && onHoverAndActiveNavLink}
`;