import {useState, useReducer, useRef} from 'react'
import Content from './Content'

//useState
//1. Init State: 0
//2. Action: Up (state + 1) / Down (state - 1)

//useReducer
//1. Init State: 0
const initState = {
  job: '',
  jobs: []
};

//2. Action: Up (state + 1) / Down (state - 1)
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload: payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload: payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload: payload
  }
}

//3. Reducer
let newState

const reducer = (state, action) => {
  switch(action.type){
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)

      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invalid Action');
  }

  return newState;
}
//4. Dispatch


function App() {
  const [state, dispatch] = useReducer(reducer, initState);

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
