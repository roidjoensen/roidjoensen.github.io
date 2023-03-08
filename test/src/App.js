import React,{useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [resutl,setResult] = useState('nothing')

  useEffect(()=>{
    fetch('http://212.60.126.221/').then((response)=>
    response.json()
    ).then((data)=> {
      console.log(data)
      setResult(data)})
    
  },
  []
  )
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
          {resutl}
        </a>
      </header>
    </div>
  );
}

export default App;
