import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AboutUs from '../components/AboutUs';
import BookingCard from '../components/BookingCard';
import BookingSteps from '../components/BookingSteps';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TopCars from '../components/TopCars';


const PageContainer = styled.div`
    ${tw`
        min-h-[50vh]
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;


function Home() {
  return (
    <PageContainer>
      <Hero/>
      <BookingCard/>
      <BookingSteps/>
      <AboutUs/>
      <TopCars/>
      <Footer/> 
    </PageContainer>
  );
}

export default Home;