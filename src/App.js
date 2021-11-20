import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import './Global.css';
import { GlobalContext } from './UserContext';

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Header />
        <MainSection />
      </div>
    </GlobalContext>
  );
}

export default App;
