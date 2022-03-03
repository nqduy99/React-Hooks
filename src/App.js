import { useStore, actions } from './store'

function App() {

  const [state, dispatch] = useStore()

  const {todos, todoInput} = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  console.log(todos)

  return (
      <div style={{padding: 20}}>
        <h1>Hello Anh Em F8</h1>
        <input
          value={todoInput}
          placeholder="Enter To do..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />

        <button onClick={handleAdd}>
          Add
        </button>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
  )
}

export default App;
