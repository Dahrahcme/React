import React from 'react';

const Output = (props) => {
    return (
        <div>
            <p>My name is {props.fName}</p>
            <input type="text" onChange={props.change} value={props.fName}/>
        </div>
    );
}

export default Output;
