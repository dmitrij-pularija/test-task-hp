import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 48px;
`;

export const Back = styled(Link)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff,
    -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Filter = styled.div`
position: relative;
// display: inline-block;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff,
    -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

// export const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

export const FilterToggle = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background: inherit;

  &:focus {
    outline: none;
  }
`;

export const FilterMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  // top: 0;
  z-index: 1000;
  min-width: 160px;
  padding: 8px 0;
  // margin: 2px 0 0;
  background-color: #ebd8ff;
  // background-clip: padding-box;
  // border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

`;

export const FilterItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 8px 16px;
  // clear: both;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  color: #5736a3;
  white-space: nowrap;
  background-color: transparent;
  border: none;
  cursor: pointer;


  &:hover,
  &:focus {
    color: #ebd8ff;
    background-color: #837AD4;
  }
`;