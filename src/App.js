import logo from './logo.svg';
import './App.css';
import Advantages from './Pages/advantages.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="menu">
          Здесь должна быть шапка сайта
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload123.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <body>
        <div className="adv_content">
          <Advantages/>
        </div>
      </body>

      <footer>
        <div>
          Здесь должен быть подвал сайта
        </div>
      </footer>

    </div>
  );
}

export default App;
