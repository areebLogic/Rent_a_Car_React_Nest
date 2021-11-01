import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { TailSpin } from 'react-loader-spinner';

function RenderLoader() {
  return <div className='h-[50vh] flex w-full justify-center items-center ' >
    <TailSpin width={60} color='#2196F3' />;
  </div>;
}

export default RenderLoader;
