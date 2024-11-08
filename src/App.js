import prof_jc from './prof_jc.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={prof_jc} className="prof_jc" alt="prof_jc" />
        <p>
          Professor JC is very kind and nice Professor.
        </p>
        <a
          className="App-link"
          href="https://lifove.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More information...
        </a>
      </header>
    </div>
  );
}

export default App;
