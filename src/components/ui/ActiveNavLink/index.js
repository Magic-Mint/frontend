import { useLocation } from "react-router-dom";
import { StyledNavLink } from './styles';

const ActiveLink = ({ children, to, ...rest }) => {
  const {pathname} = useLocation();
  return (
    <StyledNavLink
      {...rest}
      to={to}
      isActive={to === pathname}>
      {children}
    </StyledNavLink>
  );
};

export default ActiveLink;