import React, {useContext} from 'react';
import {SmurfContext} from './SmurfContext';
import SmurfCard from './SmurfCard';

const SmurfList = () => {
    const {data} = useContext(SmurfContext);
    return (
        <div className='SmurfList'>
            <h1>SmurfList</h1>
            {data.map(item =>
                <SmurfCard 
                    key={item.id}
                    smurf={item}
                />
                )}
        </div>
    )
}
export default SmurfList;