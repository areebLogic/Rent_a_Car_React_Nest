import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ScreenSizes } from '../utils/responsive/Screens';
import carImg from '../assets/images/civic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Map from './Map';

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        px-6
        lg:my-20
        md:my-16
        sm:my-14
        my-10
        mx-6
    `}
`;

const CarContainer = styled.div`
  width: auto;
  position: relative;
  height: 6em;
  margin-bottom: 10px;
  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${ScreenSizes.md}) {
    height: 10em;
  }
  @media (min-width: ${ScreenSizes.lg}) {
    height: 14em;
  }
  @media (min-width: ${ScreenSizes['2xl']}) {
    height: 18em;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        lg:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h2`
  ${tw`
        text-secondary
        text-2xl
        md:text-4xl
        font-extrabold
        font-heading
        md:my-2
        my-2
        flex
        items-center
    `}
`;

const Desc = styled.p`
  ${tw`
        max-w-2xl
        text-sm
        md:text-base
        text-justify
        text-gray-600
        italic
    `}
`;

function AboutUs() {
  return (
    <Container>
      <CarContainer>
        <img src={carImg} alt='car' />
      </CarContainer>
      <InfoContainer>
        <Title>
          <FontAwesomeIcon className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mr-2 text-primary' icon={faCircleCheck} />
          Get The Best
        </Title>
        <Desc>
          Most car rental offices offer a range of vehicle sizes to suit a
          variety of budgets and space requirements and some additionally offer
          specialized vehicles to suit its location such as convertibles,
          prestige models, hybrid/electric vehicles, or SUVs and passenger vans.
          We guarantee to provide the best of all types of cars and it is our ambition
          to satisfy our customers by taking customer-satisfaction to the next level.
          <p className='mt-4 font-bold font-central'>
            - CEO Rent 2 4 7
          </p>
        </Desc>
      </InfoContainer>
      <Map/>
    </Container>
  );
}

export default AboutUs;
