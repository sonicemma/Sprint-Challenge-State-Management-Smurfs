import React, {useContext} from 'react';
import {SmurfContext} from './SmurfContext';
import SmurfCard from './SmurfCard';

const SmurfList = () => {
    const {smurfs} = useContext(SmurfContext);
    return (
        <div className='SmurfList'>
            <h1>SmurfList</h1>
            {smurfs.map(smurfs =>
                <SmurfCard 
                    key={smurfs.id}
                    smurf={smurfs}
                />
                )}
        </div>
    )
}
export default SmurfList;