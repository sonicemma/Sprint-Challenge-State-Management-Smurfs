import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SmurfForm = () => {
    const [newData, setNewData] = useState({});

    const handleChange = e => {
        setNewData( {...newData, [e.target.name] : e.target.value} );
    }

    return (
        <h1>SmurfForm</h1>
    )
}

export default SmurfForm;