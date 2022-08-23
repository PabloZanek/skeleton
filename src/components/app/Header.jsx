import React from 'react';
import styled from 'styled-components';
import UserComponent from '../header/UserComponent';

const logo = require('../../assets/Flamingo_LogoText.png');

const Header = () => {
  const HeaderDiv = styled.div`
    height: 4rem;
  `;

  return (
    <HeaderDiv className="w-full flex justify-between items-center">
      <div>
        <img width={156} src={logo} alt="Flamingo" />
      </div>
      <UserComponent />
    </HeaderDiv>
  );
};

export default Header;
