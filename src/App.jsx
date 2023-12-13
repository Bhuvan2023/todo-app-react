import React from 'react'
import { useState } from 'react'

const App = () => {
  const [textfield, setTextfield] = useState([])
  const [inputval, setInputval] = useState("")

const handlechange =(event)=>{
  setInputval(event.target.value)
}
const handleclick = ()=>{
  const newarr = [...textfield, inputval];
  setTextfield(newarr)
}

const deletefun = (todoname)=>{
  const newval = textfield.filter((todo)=> todo !==todoname);
  setTextfield(newval)
}

  return (
    <div>
      <div className="todoinput">
        <input type="text" onChange={handlechange}  />
        <button onClick={handleclick}>Add</button>
      </div>
      <div className="list">
        {textfield.map((todo)=>{
          return (
            <>
            <p>{todo}</p> <button onClick={()=>deletefun(todo)}>delete</button>
            </>
          )
        })}
      </div>

    </div>
  )
}

export default App