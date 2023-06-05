import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #837ad4;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Logo = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;
  color: rgba(235, 216, 255, 1);

  &:hover,
  &:focus {
    color: rgba(92, 211, 168, 1);
  }
  &.active {
    color: rgba(92, 211, 168, 1);
    border-bottom: 3px solid rgba(92, 211, 168, 1);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 71px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;