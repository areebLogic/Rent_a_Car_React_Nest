import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import logoImg from '../assets/images/car-logo.png';

interface ILogoProps {
  dark?: string
}


const Container = styled.div`
    ${tw`
        flex
        items-center
        cursor-default
    `}
`;

const LogoText = styled.h4`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        m-1
        font-central
        text-secondary
    `}

`;

const Image = styled.div`

    width: auto;
    display: flex;
    align-items: center;
    ${tw `
        h-6
        md:h-9
        bg-primary
        rounded-[50%]
    `}
    img{
        width: 60px;
        height: auto;
        object-fit: cover;
    }

`;

function Logo(props: ILogoProps) {
  return (
    <Container>
      <Image>
        <Link to='/' >
          <img src={logoImg} alt='logo' />
        </Link>
      </Image>
      <LogoText>
        <span className={`${props.dark && 'text-white'}`}>
        Rent247
        </span>
      </LogoText>
    </Container>
  );
}

export default Logo;