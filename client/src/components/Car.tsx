import { faEllipsis, faGasPump, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from './Button';

export interface ICarProps {
  dailyPrice?: string,
  gas?: string,
  mileage?: string,
  monthlyPrice?: string,
  name?: string,
  transmission?: string,
  thumbnailUrl?: string,
  id?:string
}

const Container = styled.div`
    width: 16em;
    min-height: 22em;    
    box-shadow: 0 1.2px 16px -2px rgba(0,0,0,0.4) ;
    ${tw`
        flex
        flex-col
        justify-between
        p-4
        rounded-md
        m-2
        sm:m-3
        md:m-4
    `}
`;

const CarThumbnail = styled.div`
    ${tw`
        w-full
        h-auto
        mt-6
    `}
    img{
        width: 100%;
        height: 100%;
    }
`;

const CarName = styled.h4`
    ${tw`
        text-base
        font-bold
        font-heading
        text-secondary
        my-1
    `}
`;

const PricesContainer = styled.div`
    ${tw`
        w-full
        flex
        py-2
        border-b-2
    `}
`;

const DailyPrice = styled.h5`
    ${tw`
        text-red-500
        font-bold
        text-sm
        mr-4
    `}
`;

const MonthlyPrice = styled.h5`
    ${tw`
        text-gray-500
        font-bold
        text-sm
    `}
`;

const CarDetails = styled.div`
    ${tw`
        flex
        w-full
        justify-between
        mt-2
        mb-4
    `}
`;

const SmallText = styled.span`
    color: inherit;
    ${tw`
        text-xs
        font-normal
    `}
`;

const CarDetail = styled.span`
    ${tw`
        flex
        items-center
    `}
`;

const CarInfo =  styled.h5`
    ${tw`
        text-gray-500
        text-xs
    `}
`;

const LowerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

function Car(props: ICarProps) {

  const {thumbnailUrl,mileage,gas,transmission,name,dailyPrice,monthlyPrice, id} = props;
  const navigate = useNavigate();
  return (
    <Container>
      <CarThumbnail>
        <img src={thumbnailUrl} alt="car" />
      </CarThumbnail>
      <LowerContainer>
        <CarName>
          {name}
        </CarName>
        <PricesContainer>
          <DailyPrice>
            ${dailyPrice}<SmallText>/Day</SmallText>
          </DailyPrice>
          <MonthlyPrice>
            ${monthlyPrice}<SmallText>/Month</SmallText>
          </MonthlyPrice>
        </PricesContainer>
        <CarDetails>
          <CarDetail>
            <FontAwesomeIcon className='mr-1 text-primary' icon={faTachometerAlt} />
            <CarInfo>
              {mileage}
            </CarInfo>
          </CarDetail>
          <CarDetail>
            <FontAwesomeIcon className='mr-1 text-primary' icon={faEllipsis} />
            <CarInfo>
              {transmission}
            </CarInfo>
          </CarDetail>
          <CarDetail>
            <FontAwesomeIcon className='mr-1 text-primary' icon={faGasPump} />
            <CarInfo>
              {gas}
            </CarInfo>
          </CarDetail>
        </CarDetails>
        <Button onClick={()=> navigate(`/cars/${id}`)} text='Rent' theme='filled' />
      </LowerContainer>
    </Container>
  );
}

export default Car;