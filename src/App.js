import {useEffect, useRef, useState} from 'react'
import Content from './Content'

function App() {

  const[count, setCount] = useState(60)

  const timerId = useRef()
  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleStart = () => {
    timerId.current = setInterval(() => {

      setCount(prevCount => prevCount - 1)
    }, 1000)

    console.log('Start -> ', timerId.current)
  }

  const handleStop = () => {
    clearInterval(timerId.current)

    console.log('Stop -> ', timerId.current)
  }

  console.log(count, prevCount.current)

  return (
    <div style={{padding: 20}} className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
