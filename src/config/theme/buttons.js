import { css } from 'styled-components';

const defaultStyles = css`
  ${({ theme }) => theme.typography.regular}
  font-size: 1.1rem;
  padding: 10px 15px;
  border: 0;
  border-radius: 10px;
  transition: linear 250ms;
  ${({ theme }) => theme.shadows.boxShadowDark}
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const defaultTransparentBtnsStyles = css`
  background: transparent;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
`;

const buttons = {
  defaultStyles,
  defaultTransparentBtnsStyles,
  chartreuse: css`
    ${defaultStyles}
    background-color: ${({ theme }) => theme.colors.chartreuse};
  `,
  chartreuseTransparent: css`
    ${defaultStyles}
    ${defaultTransparentBtnsStyles}
    border-color: ${({ theme }) => theme.colors.forestGreen};
  `,
  black: css`
    ${defaultStyles}
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  `,
};

export default buttons;
