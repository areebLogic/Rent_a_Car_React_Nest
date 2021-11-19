import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import carImg from '../assets/images/blue-car.png';
import blob from '../assets/images/blob.svg';
import { ScreenSizes } from '../utils/responsive/Screens';
import Button from './Button';

const Container = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    items-center
    justify-around
    px-2
    lg:px-12
    lg:mt-48
    md:mt-32
    sm:mt-24
    mt-10
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
  `}
`;

const HeroTitle = styled.h1`
  ${tw`
    font-extrabold
    font-heading
    text-secondary
    text-2xl
    xl:text-6xl
    md:text-5xl
    sm:text-3xl
    md:font-extrabold
    mb-3
    sm:leading-snug
    lg:leading-[50px]
    xl:leading-[65px]
    capitalize
  `}
`;

const HeroDescription = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    font-medium
    text-gray-500
  `}
`;

const ButtonContainer = styled.div`
    ${tw`
        flex
        mt-6
        gap-2
    `}
`;

const Blob = styled.div`
  width: 30em;
  height: 10em;
  position: absolute;
  right: -10em;
  top: -12em;
  z-index: -1;
  transform: rotate(-30deg);
  
  img{
    width: 100%;
    max-height: max-content;
  }

  @media (min-width: ${ScreenSizes.sm}) {
    width: 50em;
    max-height: 10em;
    right: -14em;
    top: -18em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${ScreenSizes.lg}) {
    width: 60em;
    max-height: 30em;
    right: -12em;
    top: -22em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${ScreenSizes.xl}) {
    width: 70em;
    max-height: 10em;
    right: -15em;
    top: -30em;
    transform: rotate(-20deg);
  }
`;

const Car = styled.div`
    width:auto;
    height: 10em;
    position: absolute;
    right: -6em;
    top: -5em;

    img{
      width: auto;
      height: 100%;
      max-width: fit-content;
      object-fit: scale-down;

    }
    @media (min-width: ${ScreenSizes.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
    @media (min-width: ${ScreenSizes.lg}) {
    height: 21em;
    right: -8em;
    top: -10em;
  }
    @media (min-width: ${ScreenSizes.xl}) {
    height: 30em;
    right: -16em;
    top: -15em;
  }

`;

const scrollToCars = (id:string) =>{
  document.getElementById(id)?.scrollIntoView();
};

function Hero() {
  return (
    <Container>
      <LeftContainer>
        <HeroTitle>
            Rent what <span className='text-primary' >you</span> like as long as <span className='text-primary' >you</span> like
        </HeroTitle>
        <HeroDescription>
            We have all local cars available for rent 24/7 hand-picked best in class across all categories to suit
            you and your needs to give you the best experience of your life complimented with
            quality and safety. 
        </HeroDescription>
        <ButtonContainer>
          <Button onClick={()=>scrollToCars('booking')} theme='filled' text='Rent Now' />
          <Button onClick={()=>scrollToCars('cars')} theme='outlined' text='Our Cars'/>
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <Blob>
          <img src={blob} />
        </Blob>
        <Car>
          <img src={carImg} />
        </Car>
      </RightContainer>
    </Container>
  );
}

export default Hero;