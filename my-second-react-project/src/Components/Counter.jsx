import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseValue = () => {
        setCount(count + 1)
    }

      const decreaseValue = () => {
        if (count === 0){
            return
        }else{
            setCount(count - 1)
        }
        
    }

  return (
    <div>
       <div>
        <h2>{count}</h2>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
    </div>
    </div>
  )
}

export default Counter