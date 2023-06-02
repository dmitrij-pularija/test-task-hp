import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import Container from '../Container/Container';
import { ReactComponent as LogoIcon } from "../assets/img/logo.svg";
import { Header, Logo, Nav, NavItem, OutletBox } from './SharedLayout.styled';

const SharedLayout = () => {
  
    return (
      <Container>
        <Header>
          <Logo to="/"> <LogoIcon fill="#2B227A" /></Logo>
          <Nav>
              <NavItem to="/" end>Home</NavItem>
              <NavItem to="/tweets">Tweets</NavItem>
          </Nav>
        </Header>
        <OutletBox>
          <Suspense fallback={<Loader />}>
              <Outlet />
          </Suspense>
        </OutletBox>
      </Container>
    );
  };
  
  export default SharedLayout;