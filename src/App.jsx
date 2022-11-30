// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
function App() {
   const name = "Hello World";
   const obj = { message: "Welcome to expertizo" }
   const data = ['We', 'are', 'United'] //Show these in separate tags
   const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in separate tags
   const complex = [{company: 'XYZ', jobs: ['JavaScript', 'React']}, {company: 'ABC', jobs: ['Angular', 'Ionic']}] //Show these in a Table
  const [condition, setCondition] = useState(true);
  const reverse = ()=>{
    setCondition(!condition)
   console.log(condition)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>fayyaz ansari</h1>
        <h1><i className="fas fa-user"></i></h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
