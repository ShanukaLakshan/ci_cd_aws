import logo from "./logo.svg";
import "./App.css";

function App() {
  const msg = async () => {
    const response = await fetch("/api");

    if (response.status !== 200) throw Error("Error");
    return response.body.message;
  };
  return (
    <div className="App">
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
          {/* Learn React {msg()} */}
          Test
        </a>
      </header>
    </div>
  );
}

export default App;
