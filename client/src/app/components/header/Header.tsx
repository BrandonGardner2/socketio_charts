import React, { ReactElement } from 'react';
import styled from 'styled-components';

import ChartSelector from '../charts/ChartSelector';

const Header = (): ReactElement => (
  <HeaderContainer>
    <Title>Corva Socket IO App</Title>
    <ChartSelector />
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: lighter;
`;
