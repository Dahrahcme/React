import React, {useState} from 'react';
import './Color.css'

const Color = () => {
    const [count, setCount] = useState(0)

    const buttonCount = () => {
        setCount(count + 1)
    }

    return (
        <div className='display'>
            <h2>Button Count</h2>
            <button onClick={buttonCount}>I have clicked my button {count} times.</button>
        </div>
    )
}

export default Color