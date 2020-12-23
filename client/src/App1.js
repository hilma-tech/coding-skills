import logo from './logo.svg';
import './App.css';
import Input from './components/SimpleInput'
import { AsyncArr, AsyncArr2, ReverseArrayAndIncrease } from './common/ArrayFunctions';

function App() {
  ReverseArrayAndIncrease([1, 2, 3, 4])
  AsyncArr(["https://swapi.dev/api/people/1", "https://swapi.dev/api/planets/1", "https://swapi.dev/api/people/5"])
  // AsyncArr2(["https://swapi.dev/api/people/1", "https://swapi.dev/api/planets/1", "https://swapi.dev/api/people/5"])

  return (
    <div className="App">
      <Input></Input>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
