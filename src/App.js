import logo from './logo.svg';
import './App.css';
import HelloEl from './HelloEl';

function App() {
  return (
    <div className="App">   
      <header className="App-header">
      <h1>React Intro</h1>
        <HelloEl logoSrc={logo} headerProp="header from props" contentProp="content from props"/>
        <HelloEl headerProp="header2 from props" contentProp="content2 from props"/>
      </header>
    </div>
  );
}

export default App;
