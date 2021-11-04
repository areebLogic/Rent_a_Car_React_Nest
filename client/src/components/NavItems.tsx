import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu'; 
import { useMediaQuery } from 'react-responsive';
import { ScreenSizes } from '../utils/responsive/Screens';
import menuStyles from '../utils/responsive/menuStyles';
import { Link } from 'react-router-dom';

const Container = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li`
  ${tw`
        text-base
        w-max
        md:text-lg
        font-semibold
        my-5
        md:mr-5
        cursor-pointer
        transition
        duration-300
        p-1
        border-b-2
        border-transparent
        hover:border-primary
        text-white
        sm:text-secondary
        font-heading
        
    `}

`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: ScreenSizes.sm });
  if (isMobile) {
    return <Menu right styles={menuStyles} >
      <Container>
        <NavItem>
          <Link to='/'>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <a href="#cars">Cars</a>
        </NavItem>
        <NavItem>
          <a href="#services">Services</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Contact Us</a>
        </NavItem>
      </Container>
    </Menu>;
  }

  return (
    <Container>
      <NavItem>
        <a href="/">Home</a>
      </NavItem>
      <NavItem>
        <a href="#cars">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#services">Services</a>
      </NavItem>
      <NavItem>
        <a href="#contact">Contact Us</a>
      </NavItem>
    </Container>
  );
}

export default NavItems;
