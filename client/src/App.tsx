import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Car from './pages/Car';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    items-center
    font-sans
  `}
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars/:id' element={<Car/>} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
