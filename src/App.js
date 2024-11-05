import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Opportunities from './components/Opportunities';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Opportunities />
    </div>
  );
}

export default App;
