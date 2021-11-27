import { faCalendarAlt, faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';


const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
        py-3
        lg:py-6
        lg:my-8
        md:my-7
        sm:my-6
        m-5
    `}
`;

const Title = styled.h2`
    ${tw`
        text-2xl
        sm:text-3xl
        md:text-4xl
        text-secondary
        font-extrabold
        font-heading        
    `}
`;

const StepsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        justify-around
        mt-4
        sm:mt-6
        md:mt-8
        lg:mt-10
    `}
`;

const StepContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-center
        transition-all
        w-full
        md:w-96
        hover:text-gray-500
    `}
`;

const Step = styled.div`
    ${tw`
        flex
        flex-col
        rounded-lg
        justify-center
        items-center
        p-6
    `}
`;

const StepTitle = styled.h3`
    ${tw`
        text-secondary
        lg:text-xl
        sm:text-lg
        text-base
        font-bold
        mt-4
        mb-1
    `}
`;

const StepDesc = styled.p`
    ${tw`
        w-8/12
        text-xs
        sm:text-sm
        lg:text-base
        text-center
        font-medium
        text-gray-500
    `}
`;


function BookingSteps() {
  return (
    <Container>
      <Title>
        How To Rent
      </Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <FontAwesomeIcon className='text-primary text-3xl sm:text-4xl lg:text-5xl' icon={faMapMarkedAlt} />
            <StepTitle>
                Choose Franchise
            </StepTitle>
            <StepDesc>
                Come to our nearest franchise and book your car today.
            </StepDesc>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <FontAwesomeIcon className='text-primary text-3xl sm:text-4xl lg:text-5xl' icon={faCalendarAlt} />
            <StepTitle>
                Decide Pick-Up
            </StepTitle>
            <StepDesc>
                Choose a date best suited for your requirements.
            </StepDesc>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <FontAwesomeIcon className='text-primary text-3xl sm:text-4xl lg:text-5xl' icon={faCarSide} />
            <StepTitle>
                Book a car
            </StepTitle>
            <StepDesc>
                Select your favourite car from our wide variety.
            </StepDesc>
          </Step>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}

export default BookingSteps;