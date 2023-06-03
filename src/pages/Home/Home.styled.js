import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 90vh;
  object-fit: cover;
  filter: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Montserrat';
font-weight: 600;
font-size: 36px;
color: #EBD8FF;
`;