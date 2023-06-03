import styled from "styled-components";

export const Gallery = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 48px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto-fit;
  gap: 48px;
  justify-content: space-between;

  @media screen and (min-width: 410px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 838px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1251px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.li`
  position: relative;
  width: calc(100% - 30px);
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: aqua;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  @media screen and (min-width: 410px) {
    width: 380px;
  }
`;
export const ContentBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 28px 36px 36px 36px;
  background: transparent;
`;
export const LogoBox = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ActiveBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  gap: 26px;
`;
export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  // line-height: 1.2;
  color: #ebd8ff;
  text-transform: uppercase;
  gap: 16px;
`;
export const Text = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const Button = styled.button`
  width: 196px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  cursor: pointer;
  border-radius: 10px;
  background: #ebd8ff;
  border-style: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  // line-height: 1.22;
  color: #373737;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.03);
  }
`;

export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Circle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
`;