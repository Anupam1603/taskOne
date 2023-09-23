
import './App.css';

const logoUrl = "https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoUrl} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          propeller
        </a>
      </header>
    </div>
  );
}

export default App;
