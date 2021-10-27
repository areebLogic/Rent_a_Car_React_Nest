import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import carsService from '../services/carsService';
import { Dispatch } from '@reduxjs/toolkit';
import { GetCars } from '../services/carsService/Requests/GetCars';
import { setTopCars } from '../redux/HomeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import Car from './Car';
import Button from './Button';
import notfound from '../assets/images/notfound.svg';

const Container = styled.div`
  ${tw`
    max-w-screen-2xl
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    my-5
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

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    my-10
    md:my-10
  `}
`;

const SelectContainer = styled.div`
  ${tw`
    flex
    gap-6
    mt-10
    mb-0
    p-4
    rounded-md
    items-center
    justify-center
`}
`;

const Select = styled.select`
  ${tw`
    bg-white
    px-4
    py-2
    rounded-md
    border-2
    hover:border-primary
    hover:shadow-lg
    transition-all
    duration-300
    font-medium
    lg:text-base
    sm:text-sm
    text-xs
    cursor-pointer
    focus:outline-none
  `}
`;

const Option = styled.option`
  ${tw`
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars[]) => dispatch(setTopCars(cars)),
});

const TopCars = () => {
  const cars = useSelector((state:RootState) => state.home);
  const [visible, setVisible] = useState(3);
  const [gas, setGas] = useState<string | undefined>(undefined);
  const [transmission, setTransmission] = useState<string | undefined>(
    undefined
  );
  const { setTopCars } = actionDispatch(useDispatch<AppDispatch>());
  const isMounted = useRef(false);
  const fetchCars = async () => {
    const cars = await carsService.getAllCars().catch((err) => {
      throw err;
    });
    setTopCars(cars);
  };

  useEffect(() => {
    if (!isMounted.current) {
      const getCars = async () => {
        const specificCars = await carsService
          .getCars(
            transmission !== 'undefined' ? transmission : undefined,
            gas !== 'undefined' ? gas : undefined
          )
          .catch((err) => {
            throw err;
          });
        if (!transmission && !gas) {
          fetchCars();
        }
        setTopCars(specificCars);
      };
      getCars();
      console.log(gas, transmission);
    } else {
      isMounted.current = true;
    }
  }, [transmission, gas]);

  const showMoreCars = () => {
    setVisible((prevValue): number => {
      if (prevValue < cars.topCars.length) {
        setVisible(prevValue + 4);
      } else {
        setVisible(cars.topCars.length);
      }
      return prevValue;
    });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container id='cars' >
      <Title>Explore our variety</Title>
      <SelectContainer>
        <Select onChange={(e) => setGas(e.target.value)}>
          <Option value={'undefined'} defaultChecked>
            Gas type
          </Option>
          <Option value='petrol'>Petrol</Option>
          <Option value='diesel'>Diesel</Option>
          <Option value='electric'>Electric</Option>
        </Select>
        <Select onChange={(e) => setTransmission(e.target.value)}>
          <Option value={'undefined'} defaultChecked>
            Transmission
          </Option>
          <Option value='auto'>Automatic</Option>
          <Option value='manual'>Manual</Option>
        </Select>
      </SelectContainer>
      <CarsContainer>
        {cars.topCars.length !== 0 ? cars.topCars.slice(0, visible).map((el: object, index: number) => {
          return <Car {...el} key={index} />;
        })
          :
          <Container>
            <img className='w-[20vw]' src={notfound} alt="" />
            <h2 className='font-heading font-bold text-stone-700 lg:text-xl sm:text-lg text-base mt-4 text-center'>Sorry we couldn&apos;t find what you were looking for...</h2>
            <h3 className='font-medium text-stone-500 lg:text-base sm:text-sm text-xs text-center'>Try combining different filters to search for more cars.</h3>
          </Container>
        }
      </CarsContainer>
      <Button
        disabled={cars.topCars.length === visible && true}
        className='disabled:cursor-not-allowed disabled:opacity-60'
        onClick={showMoreCars}
        theme='outlined'
        text='Load More'
      />
    </Container>
  );
};

export default TopCars;
