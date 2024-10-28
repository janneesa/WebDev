import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hello />
      <Bye />
    </div>
  );
}

function Hello() {
  return <p>Hello, React!</p>;
}

function Bye() {
  return <p>Goodbye, React!</p>;
}

export default App;
