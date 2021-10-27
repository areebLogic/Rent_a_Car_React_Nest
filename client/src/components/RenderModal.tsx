import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from './Button';


interface IModalProps {
  monthlyPrice: string;
  dailyPrice: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth:'90vw',
    padding:'30px'
  },
};

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
  align-items: center;
  max-width: 1536px;
  padding: 8px;
`;

const SubmitModal = styled.div`
  ${tw`
    py-2
    px-4
    bg-green-200
    w-[fit-content]
    text-green-600
    rounded-md
    lg:text-base
    sm:text-sm
    text-xs
    font-medium
  `}
  animation: appear 1 1s linear;
  @keyframes appear{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

`;




const RenderModal = (props: IModalProps) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setSubmit(true);
    setTimeout(()=>{
      setSubmit(false);
    },5000);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <FontAwesomeIcon onClick={closeModal} className='absolute top-6 right-5 cursor-pointer' icon={faClose} />
        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold font-heading text-secondary' >Book An Appointment</h2>
        <p className='max-w-[450px] text-gray-500 lg:text-base sm:text-sm text-xs' >Enter your details in the form below and our representative will get in touch with you soon.</p>
        <form onSubmit={onSubmit} className='flex flex-col gap-4  my-4  text-secondary'>
          <div className='flex flex-col gap-1 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium'>Full Name</label>
            <input required placeholder='Enter your name' type="text" className='focus:outline-none placeholder:italic focus:border-primary hover:border-primary transition-all border-2 p-2 rounded-md' />
          </div>
          <div className='flex flex-col gap-1 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium'>Email</label>
            <input required placeholder='Enter your email' type="email" className='focus:outline-none placeholder:italic focus:border-primary hover:border-primary transition-all border-2 p-2 rounded-md' />
          </div>
          <div className='flex flex-col gap-1 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium'>Phone Number</label>
            <input required placeholder='Enter your number' type="tel" className='focus:outline-none placeholder:italic focus:border-primary hover:border-primary transition-all border-2 p-2 rounded-md' />
          </div>
          <div className='flex flex-col gap-1 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium'>Preferred Car / Type</label>
            <input required placeholder='Corolla, SUV, Sedan etc.' type="text" className='focus:outline-none placeholder:italic focus:border-primary hover:border-primary transition-all border-2 p-2 rounded-md' />
          </div>
          <Button className='w-fit' text='Submit' theme='filled' />
        </form>
        { submit && <SubmitModal>
         Appointment Submitted
        </SubmitModal>}
      </Modal>
      <ButtonContainer>
        {/*eslint-disable*/}
        <Button onClick={openModal} className='mt-10 mx-2' text={`Rent For A Day /$${props.dailyPrice}`} theme='outlined' />
        <Button onClick={openModal} className='mt-10 mx-2' text={`Rent For A Month /$${props.monthlyPrice}`} theme='filled' />
      </ButtonContainer>
    </div>
  );
};


export default RenderModal;

