import logo from './logo.svg';
import './App.css';

function App() {

  let ucapan, waktupagi;

  let x = 11;
  
  waktupagi = false;

  if (waktupagi) {
    ucapan = 'Selamat Pagi!';
  }

  else {ucapan = 'Selamat Sore!';}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{ucapan}</h1>

        {5+5}

        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
        </ul>

        <p>Saya adalah paragraph.</p>
        <p>Saya juga paragraph.</p>

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
