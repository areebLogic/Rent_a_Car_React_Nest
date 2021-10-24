import React, { useEffect, useState } from 'react';
import {
  faCarAlt,
  faEllipsis,
  faGasPump,
  faLocationDot,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { useLocation } from 'react-router-dom';
import carsService from '../services/carsService';
import RenderLoader from '../components/RenderLoader';
import RenderModal from '../components/RenderModal';

const Container = styled.div`
  ${tw`
        w-full
        my-10
        flex
        flex-col
        items-center
    `}
`;

const UpperContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        my-4
        max-w-screen-xl

    `}
`;

const UpperLowerContainer = styled.div`
  ${tw`
        p-2
    `}
`;

const Title = styled.h1`
  ${tw`
        font-heading
        font-extrabold
        lg:text-5xl
        md:text-4xl
        sm:text-3xl
        text-2xl
        text-white
        my-4
        py-2
        lg:border-b-[10px]
        md:border-b-[8px]
        border-b-[6px]
        border-primary
        bg-secondary
        w-full
        text-center

    `}
`;

const InnerTitle = styled.h2`
  ${tw`
    font-medium
    lg:text-3xl
    md:text-2xl
    text-xl
    text-secondary
    my-4
    md:text-left
    text-center
    `}
`;

const Desc = styled.p`
  ${tw`
    text-gray-700
    lg:text-lg
    md:text-base
    text-sm
    font-sans
    flex
    `}
`;

const LowerContainer = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      md:items-start
      items-center
      max-w-screen-xl
      p-2
    `}
`;

const LowerInnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        md:justify-start
        justify-center 
        w-full
        gap-5
        my-4
    `}
`;

const SpecContainer = styled.div`
  ${tw`
        py-5
        px-10
        rounded-2xl
        bg-secondary
        flex
        flex-col
        flex-1
        max-w-[200px]
        justify-between
        items-center
        shadow-lg
    `}
`;

const SpecInnerContainer = styled.div`
  ${tw`
        flex
        items-center
        mt-1
        border-b-2
        border-primary
    `}
`;

const Spec = styled.h3`
  ${tw`
        text-white
        lg:text-xl
        md:text-lg
        text-base
        font-bold
        mr-1
        capitalize
    `}
`;

const SmallText = styled.span`
  ${tw`
        text-gray-100
        lg:text-base
        md:text-sm
        text-xs
    `}
`;


const Car = () => {
  const [data, setData] = useState<any>({});
  const carId: string = useLocation().pathname.split('/')[2];
  useEffect(() => {
    const fetchCar = async () => {
      const res = await carsService.getCar(carId).catch((err) => {
        throw err;
      });
      setData(res);
    };
    fetchCar();
  }, []);
  return (
    <Container>
      {data ? (
        <>
          {' '}
          <UpperContainer>
            <img
              className='w-[70vw] max-h-[500px] object-scale-down '
              src={data.thumbnailUrl}
              alt='car'
            />
            <Title>{data.name}</Title>
            <UpperLowerContainer>
              <InnerTitle>Overview</InnerTitle>
              <Desc>
                Dodge&apos;s big muscle car is a hoot to drive, even if it
                doesn&apos;t feel quite as sharp as the Chevrolet Camaro or Ford
                Mustang. Of the three, the 2022 Challenger is the most
                old-school, which makes sense since the design dates to 2008,
                which itself recalls the Challengers from the early 1970s. This
                is a big, heavy coupe that feels big and heavy from behind the
                wheel. Thankfully, there&apos;s a diverse selection of available
                V8 engines that are more than capable of imparting this big
                coupe with rapid straight-line velocity. Or just big smoky
                burnouts if that&apos;s more your thing. The Challenger comes
                with a standard V6, but it&apos;s the SRT and supercharged
                Hellcat engines that will blast you down the local drag strip
                with joyful abandon.
              </Desc>
            </UpperLowerContainer>
          </UpperContainer>
          <LowerContainer>
            <InnerTitle>Specifications</InnerTitle>
            <LowerInnerContainer>
              <SpecContainer>
                <FontAwesomeIcon
                  className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                  icon={faTachometerAlt}
                />
                <SpecInnerContainer>
                  <Spec>200</Spec>
                  <SmallText>km/h</SmallText>
                </SpecInnerContainer>
              </SpecContainer>
              <SpecContainer>
                <FontAwesomeIcon
                  className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                  icon={faGasPump}
                />
                <SpecInnerContainer>
                  <Spec>{data.gas}</Spec>
                  <SmallText>/gas</SmallText>
                </SpecInnerContainer>
              </SpecContainer>
              <SpecContainer>
                <FontAwesomeIcon
                  className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                  icon={faEllipsis}
                />
                <SpecInnerContainer>
                  <Spec>{data.transmission}</Spec>
                  <SmallText>/gear</SmallText>
                </SpecInnerContainer>
              </SpecContainer>
              <SpecContainer>
                <FontAwesomeIcon
                  className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                  icon={faCarAlt}
                />
                <SpecInnerContainer>
                  <Spec>Sedan</Spec>
                  <SmallText>/type</SmallText>
                </SpecInnerContainer>
              </SpecContainer>
            </LowerInnerContainer>
          </LowerContainer>
          <LowerContainer>
            <InnerTitle>Location</InnerTitle>
            <Desc>
              <FontAwesomeIcon
                className='text-2xl text-primary mr-2'
                icon={faLocationDot}
              />
              13060 Iron Bridge Park Rd Moody, Texas(TX), 76557
            </Desc>
            <Map />
            <RenderModal dailyPrice={data.dailyPrice} monthlyPrice={data.monthlyPrice} />
          </LowerContainer>{' '}
        </>
      ) : (
        // <RenderLoader />
        <></>
      )}
      <Footer />
    </Container>
  );
};

export default Car;
