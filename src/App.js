import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App(props) {
  // console.log(useState(null));
  var [_userName, setUserName] = useState(null);

  useEffect(function() {
    console.log('componenet did mount');
    fetch('http://localhost:3001/api')
            .then(res=>res.json())
            .then(data=>setUserName(data.username));
    // console.log(_userName)
  },[]);

  console.log('render');
  return (
    <div className="App">
      <header className="App-header">
        {_userName ? `Hello ${_userName}` : 'Hello World'}
      </header>
    </div>
  );
}

export default App;
