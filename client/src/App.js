import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Square from './components/Square2.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/square' component={Square} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
