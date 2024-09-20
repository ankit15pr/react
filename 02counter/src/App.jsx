import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 5;

  const addValue = () => {
    // console.log("clicked" , counter);
    // counter = counter + 1;
    if(counter <= 19){
      setCounter(counter + 1)
    }else{
      setCounter(counter + 0)
    }
  }

  const subtractValue = () => {
    if(counter === 0){
      setCounter(counter - 0)
    }else{
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>React js</h1>
      <h2>Counter Value : {counter} </h2>

      <button 
      onClick={addValue}>Add Value</button> 
      <br />
      <button
      onClick={subtractValue}>Subtruct Value</button>
    </>
  )
}

export default App
