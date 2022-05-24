import React from 'react';
import logo from './logo.svg';
import './App.css';import { Input } from './Input';


function App() {
  return (
    <div className="App">
      <Input  key={Math.random()} otpinput={5}/>
    </div>
  );
}

export default App;
