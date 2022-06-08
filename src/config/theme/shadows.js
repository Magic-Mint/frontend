import { css } from 'styled-components';

const shadows = {
  boxShadowDark: css`
    box-shadow: 0px 2px 15px -8px ${({ theme }) => theme.colors.black};
  `,
};

export default shadows;
