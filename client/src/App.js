import './App.css';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Square from './components/Square.jsx';
import UsersList from './components/UsersList.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/square' component={Square} />
          <Route exact path='/users-list' component={UsersList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
