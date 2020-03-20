import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Form = (props) =>{
    const [newData, setNewData] = useState({})


    const handleChange =(event) => {
        setNewData({...newData, [event.target.name] : event.target.value})};

    const handleSubmit = (event) =>{
        axios.post('http://localhost:3333/smurfs', newData)
        .then((response) => {
        })
    };


    return(
        <form onSubmit={handleSubmit} >
            <input
                name='name'
                type='text'
                placeholder='name'
                autocomplete="off"
                onChange={handleChange}
                value= {newData.name}
            />
            <input
                name='age'
                type='text'
                placeholder='age'
                autocomplete="off"
                onChange={handleChange}
                value={newData.age}
                
            />
            <input
                name='height'
                type='text'
                placeholder='height'
                autocomplete="off"
                onChange={handleChange}
                value={newData.height}
                
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;