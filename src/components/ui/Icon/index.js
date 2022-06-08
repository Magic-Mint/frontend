
import {memo} from 'react';
import styled from 'styled-components';

// require throwing error on dynamic strings
const Icon = ({name, css}) => {
    const Icon = require(`../../../assets/icons/${name}.svg`).ReactComponent;
    return (
      <IconWrapper css={css}>
        <Icon />
      </IconWrapper>
    );
};

const IconWrapper = styled.span`
  svg {
    ${({ css }) => css}
  }
`;

export default memo(Icon);

