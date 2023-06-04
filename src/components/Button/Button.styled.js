import styled from "styled-components";

export const Btn = styled.button`
  width: 196px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) => props.color || "#ebd8ff"};
  border-style: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.03);
    background: ${(props) =>
      props.color === "#ebd8ff" ? "#5CD3A8" : "#ebd8ff"};
  }
`;