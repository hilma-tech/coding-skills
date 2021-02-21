import './App.css';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Square from './components/Square.jsx';
import UsersList from './components/UsersList.jsx';
import { SettingsList } from './components/generics/RenderSettings';
import { createElement } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/square' component={Square} />
          <Route exact path='/users-list' component={UsersList} />
          <Route exact path='/settings' component={() => createElement(SettingsList, { isAdmin: true })} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
