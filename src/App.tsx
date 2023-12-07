import React from 'react';
import logo from './logo.svg';
import './App.css';
import SolidButton from './components/Solid Button/SolidButton';
import OutlinedButton from './components/Outlined Button/OutlinedButton';
import LabelInput from './components/Label Input/LabelInput';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header';
import Home from './pages/Home.page';

function App() {
  return (
    <>
    {/* <SolidButton title='Click Me' type='button' buttonStyle='success' />
      <OutlinedButton title='Click Me' type='button' buttonStyle='danger' />
      <LabelInput label='Name' inputType='text' placeholder='Enter your name..' isError={true} error='Invalid input' /> */}
      <Home />
    </>
  );
}

export default App;
