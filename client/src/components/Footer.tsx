import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from './Logo';


const Container = styled.div`
    ${tw`
        flex
        flex-wrap
        w-full
        bg-[rgb(31 41 55)]
        mt-20
        py-10
        px-6
        md:py-16
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        h-full
        max-w-screen-2xl
        w-full
        flex-wrap
        justify-between
    `}
`;

const About = styled.div`
    ${tw`
        flex
        flex-col
        md:mr-10
        mr-2
        mb-5
    `}
`;

const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        max-w-xs
        leading-5
        mt-2
        italic
    `}
`;

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
    `}
`;

const ListItem = styled.li`
    ${tw`
        text-sm
        text-white
        mb-3
        hover:underline
    `}
`;

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        md:mr-10 
        m-4
        ml-0
        mt-0
    `}
`;

const HorizontalSection = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const HeaderTitle = styled.h3`
    ${tw`
        font-bold
        text-lg
        text-white
        mb-3
        font-heading
    `}
`;

const SmallText = styled.h6`
    ${tw`
        text-sm
        text-white
    `}
`;

function Footer() {
  return (
    <Container>
      <InnerContainer>
        <About>
          <Logo dark='true' />
          <AboutText>
            Renting cars since 1980&apos;s to satisfy our customers with the top quality
             and commitment to ensure complete customer satisfaction.
          </AboutText>
        </About>
        <SectionContainer>
          <HeaderTitle>
            Our Links
          </HeaderTitle>
          <LinksList>
            <ListItem>
              <Link to='/'>Home</Link> 
            </ListItem>
            <ListItem>
              <Link to='/about'>About Us</Link> 
            </ListItem>
            <ListItem>
              <Link to='/services'>Services</Link> 
            </ListItem>
            <ListItem>
              <Link to='/models'>Models</Link> 
            </ListItem>
            <ListItem>
              <Link to='/blog'>Blog</Link> 
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>
            Other Links
          </HeaderTitle>
          <LinksList>
            <ListItem>
              <Link to='/faq'>FAQ</Link> 
            </ListItem>
            <ListItem>
              <Link to='/contact'>Contact Us</Link> 
            </ListItem>
            <ListItem>
              <Link to='/support'>Support</Link> 
            </ListItem>
            <ListItem>
              <Link to='/privacy'>Privacy Policy</Link> 
            </ListItem>
            <ListItem>
              <Link to='/blog'>Terms & Conditions</Link> 
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer id='contact' >
          <HeaderTitle>
                Call Now
          </HeaderTitle>
          <HorizontalSection>
            <FontAwesomeIcon className='text-primary mr-2 rotate-90' icon={faPhoneAlt} />
            <SmallText>
                000 111 222 333
            </SmallText>
          </HorizontalSection>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>
                Email Now
          </HeaderTitle>
          <HorizontalSection>
            <FontAwesomeIcon className='text-primary mr-2' icon={faEnvelope} />
            <SmallText>
                info@rentacar247.com
            </SmallText>
          </HorizontalSection>
        </SectionContainer>
      </InnerContainer>
    </Container>
  );
}

export default Footer;