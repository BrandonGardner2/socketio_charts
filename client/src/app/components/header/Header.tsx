import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Threshold from '../threshold/Threshold';

const Header = (): ReactElement => (
  <HeaderContainer>
    <Logo src="https://www.corva.ai/wp-content/themes/corva/framework/dist/images/corva-logo.png" />
    <Title>Brandon Gardner - Take Home Challenge</Title>
    <Threshold />
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 40px;
`;

const Logo = styled.img``;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
  font-weight: lighter;
`;
