import { useReducer, useRef } from 'react'
import {setJob, addJob, deleteJob} from './actions'
import reducer, {initState} from './reducer'
import logger from './logger'


function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const {job, jobs} = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{padding: 20}} className="App">
      <h3>To do</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter To Do..."
        onChange={(e)=>{
          dispatch(setJob(e.target.value))
        }}
      />  
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index)=>{
          return <li key={index}>{job} 
            <span
              style={{cursor: 'pointer'}}
              onClick={()=>{dispatch(deleteJob(index))}}
            >
              &times;
            </span>
          </li>
        })}
      </ul>

    </div>
  );
}

export default App;
