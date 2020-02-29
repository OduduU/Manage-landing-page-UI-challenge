import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import FirstSetion from './components/FirstSection/FirstSetion';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSetion />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
