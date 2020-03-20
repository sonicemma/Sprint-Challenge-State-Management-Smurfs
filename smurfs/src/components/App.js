import React, { useState, useEffect} from "react";
import axios from 'axios';
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
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
    </div>
  );
}

export default App;
