import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Wrapper, Main } from './styles';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
