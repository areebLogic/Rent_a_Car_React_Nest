import React from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from './Button';


const Container = styled.div`
  ${tw`
    lg:px-10 
    md:px-8
    sm:px-6
    px-4
    py-6
    shadow-xl
    bg-white
    lg:my-40
    md:my-32
    sm:my-24
    my-20
    rounded-md
    mx-6
  `}
`;


const UpperContainer = styled.div`
  ${tw`
  mb-2
`}
`;

const Title = styled.h2`
  ${tw`
    font-heading
    text-secondary
    font-bold
    lg:text-2xl 
    sm:text-xl
    text-lg
  `}
`;


const Desc = styled.p`
  ${tw`
    text-gray-500
    font-medium
    max-w-[650px]
    lg:text-base
    sm:text-sm
    text-xs
`}
`;

const LowerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mb-2
`}
`;


const DateContainer = styled.div`
  ${tw`
    flex
    items-center
    border-2
    hover:border-primary
    lg:px-4
    px-2
    py-2
    md:mr-4
    mr-2
    md:my-4 
    sm:my-2 
    my-1
    rounded-md
`}
`;

const DateInput = styled.input`
    ${tw`
      focus:outline-none
      ml-4
      lg:text-base
      sm:text-sm
      text-xs
      cursor-pointer
`}
`;

const goToCars = () =>{
  document.getElementById('cars')?.scrollIntoView();
};

function BookingCard() {
  return (
    <Container id='booking'>
      <UpperContainer>
        <Title>
          Plan Your Trip
        </Title>
        <Desc>
          Enter your departure and returning date in the fields below to know which cars are available nearest to you.
        </Desc>
      </UpperContainer>
      <LowerContainer>
        <DateContainer>
          <FontAwesomeIcon className='text-primary mb-1' icon={faCalendarAlt} />
          <DateInput type='text' placeholder='Departure date' onFocus={(e)=>e.currentTarget.type='date'} onBlur={(e)=>e.currentTarget.type='text'} />
        </DateContainer>
        <DateContainer>
          <FontAwesomeIcon className='text-primary mb-1' icon={faCalendarAlt} />
          <DateInput type='text' placeholder='Return date' onFocus={(e)=>e.currentTarget.type='date'} onBlur={(e)=>e.currentTarget.type='text'} />
        </DateContainer>
      </LowerContainer>
      <Button onClick={goToCars} text='Search' theme='filled' />
    </Container>
  );
}

export default BookingCard;