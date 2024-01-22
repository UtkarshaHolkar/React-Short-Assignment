
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addVal = () =>{
    setCounter(counter++);
  }
  const removeVal = () =>{
    if(counter == -1){ return }
    else{
      setCounter(counter--);
    }
    
  }

  return (
   <>
    <h1>Counter</h1><br/>
    <button onClick={addVal}>Add</button><br/>
    <h2>Counter value :{counter}</h2><br/>
    <button onClick={removeVal}>minus</button><br/>
   </>
  )
}

export default App
