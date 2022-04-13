import { useState } from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { test } from './redux/reducers/testReducer'
function App() {
  const [count, setCount] = useState(0)
const {increment} = test.actions
const prueba = useSelector(state => state.test.value)
let dispatch = useDispatch()
function incrementar(){
  dispatch(increment())
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button">
            count is: {prueba}
          </button>
        </p>
        <p>
          <button type='button' onClick={incrementar}>Increment</button>
        </p>
       
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
import { increment } from './redux/reducers/testReducer'


export default App
