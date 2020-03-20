import React from 'react';

const SmurfCard = props => {
    console.log(props);
    return (
        <>
        <h2>{props.smurf.name}</h2>
        <h2>{props.smurf.age}</h2>
        <h2>{props.smurf.height}</h2>
        </>
    )
}

export default SmurfCard;