import React from 'react';
import logo from './logo.svg';
import './App.css';
import SolidButton from './components/Solid Button/SolidButton';
import OutlinedButton from './components/Outlined Button/OutlinedButton';

function App() {
  return (
    <>
    <SolidButton title='Click Me' type='button' buttonStyle='success' />
    <OutlinedButton title='Click Me' type='button' buttonStyle='danger' />
    </>
  );
}

export default App;
