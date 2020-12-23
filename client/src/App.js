import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Ride from './components/Ride';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/ride' component={Ride} />
          <Route exact path='/uses-list' component={UsersList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
