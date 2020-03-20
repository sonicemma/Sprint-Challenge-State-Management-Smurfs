import React, { useState, useEffect} from "react";
import {SmurfContext} from './SmurfContext';
import axios from 'axios';
import SmurfList from './SmurfList';
import "./App.css";



const App = () => {

  const [smurfs, setSmurfs] = useState([]);

  // todo make it so you can add a smurf to api

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        setSmurfs(res.data)
      })
  }, [])

  return (
    <SmurfContext.Provider value={{smurfs}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
