import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App(props) {
  // console.log(useState(null));
  var [_userName, setUserName] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {_userName ? `Hello ${_userName}` : 'Hello World'}
      </header>
    </div>
  );
}

export default App;
