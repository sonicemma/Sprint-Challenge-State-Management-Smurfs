import React, { useState, useEffect} from "react";
import {SmurfContext} from './SmurfContext';
import axios from 'axios';
import SmurfList from './SmurfList';
import SmurfCard from "./SmurfCard";
import SmurfForm from './SmurfForm';
import "./App.css";




const App = () => {
  const [data, setData] = useState([]);

  // todo make it so you can add a smurf to api

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])

  return (
  <div className="App">
    <SmurfContext.Provider value={{data}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        <SmurfForm setData={setData} data={data}/>
    </SmurfContext.Provider>
    </div>
  );
}

export default App;
