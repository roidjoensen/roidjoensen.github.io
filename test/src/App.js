import React,{useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [resutl,setResult] = useState('nothing')
  const [pageToShow,setPageToShow] = useState('main')
  useEffect(()=>{
    fetch('https://212.60.126.221/', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    }).then((response)=>
    response.json()
    ).then((data)=> {
      console.log(data)
      setResult(data)})
    
  },
  []
  )




  if(pageToShow==='main'){
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
        <button onClick={()=>setPageToShow('second')}>test</button>
      </header>
      
    </div>
  )}
  
  return (
    <div className="iframe-container">
      <iframe src='https://212.60.126.221/test/'></iframe>
    </div>
  )

}

export default App;
