
import { Settings } from './components/Settings';
import Square from './components/Square.jsx';
import React, { useEffect } from 'react';
import UsersList from './components/UsersList.jsx';

import { Rendi } from './components/Rendi';
import Input from './components/SimpleInput';

import './App.css';

import { HashRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>

        <Settings isAdmin={false} />

        {/* <Rendi /> */}

        {/* <Input /> */}

        {/* <UsersList /> */}

        {/* <Square /> */}

      </Router>
    </div>
  );
}

export default App;
