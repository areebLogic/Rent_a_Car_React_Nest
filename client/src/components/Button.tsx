import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';


interface IButtonProps {
    theme: 'filled' | 'outlined';
    text: string;
    className?: string;
    onClick?: React.MouseEventHandler;
    disabled?: boolean;
}


const BaseButton = styled.button`
  ${tw`
    sm:px-6
    px-4
    py-2
    outline-none
    rounded
    text-white
    text-xs
    sm:text-sm
    md:text-base
    font-semibold
    border-transparent
    border-2
    focus:outline-none
    transition-all
    duration-300
    ease-in-out
    whitespace-nowrap
    hover:opacity-60
  `}
`;


const FilledButton = styled(BaseButton)`
  ${tw`
    bg-primary
  `}
`;


const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-transparent
    text-primary
    border-primary
  `}
`;


function Button(props: IButtonProps) {


  const { theme,text,className, onClick, disabled } = props;


  if(theme === 'outlined'){
    return <OutlinedButton disabled={disabled} onClick={onClick} className={className} >{ text }</OutlinedButton>;
  }
  else{
    return <FilledButton disabled={disabled} onClick={onClick} className={className} >{ text }</FilledButton>;
  }
}


export default Button;