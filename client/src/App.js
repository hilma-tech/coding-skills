import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Ride from './components/Ride';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/ride' component={Ride} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
