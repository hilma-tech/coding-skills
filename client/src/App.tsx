
import { Settings } from './components/Settings.js';
import Square from './components/Square.jsx';

import React, { useEffect } from 'react';
import { GS } from './components/Guests.js';

import './App.scss';
import './common/style/class-names.scss'
import { BrowserRouter } from 'react-router-dom';
import { Avengers } from './components/avengers.js';
import { DestructuringProps } from './components/DestructuringProps.js';
import LordOfTheBracelets from './components/LordOfTheRings.js';
import { Parent } from './components/SplittingComponents.js';


function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Settings />

        {/* <GS /> */}

        {/* <Square /> */}

        {/* <Avengers /> */}

        {/* <DestructuringProps /> */}

        {/* <LordOfTheBracelets /> */}

        {/* <Parent /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
