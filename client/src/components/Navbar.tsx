import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from './Logo';
import NavItems from './NavItems';


const Container = styled.div`
    min-height: 70px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:px-12
        px-2
        justify-between
    `}

`;


function Navbar() {
  return (
    <Container>
      <Logo/>
      <NavItems/>
    </Container>
  );
}

export default Navbar;