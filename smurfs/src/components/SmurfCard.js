import React from 'react';

const SmurfCard = props => {
    return (
        <div className='SmurfCard'>
        <h2>{props.smurf.age}</h2>
        <h2>{props.smurf.age}</h2>
        <h2>{props.smurf.height}</h2>
        </div>
    )
}

export default SmurfCard;