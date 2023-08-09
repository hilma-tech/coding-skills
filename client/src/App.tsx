
import { Settings } from './components/Settings.js';
import Square from './components/Square.jsx';

import React, { useEffect } from 'react';
import { Rendi } from './components/Rendi.js';

import './App.scss';
import './common/style/class-names.scss'
import { BrowserRouter } from 'react-router-dom';
import { Avengers } from './components/avengers.js';
import { DestructuringProps } from './components/DestructuringProps.js';
import { LordOfTheRings } from './components/LordOfTheRings.js';
import { Parent } from './components/SplittingComponents.js';


function App() {

  return (
    <div className="app">
      <BrowserRouter>

        {/* <Settings /> */}

        {/* <Rendi /> */}

        <Square />

        {/* <Avengers /> */}

        {/* <DestructuringProps /> */}

        {/* <LordOfTheRings /> */}

        {/* <Parent /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
