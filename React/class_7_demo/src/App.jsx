import React, { useState } from 'react'


function App() {

  let [count ,setCount]= useState(0);
  return (
    <div>
      <p onClick={()=>
        count+1
      }>Increament</p>
      <h1>{count}</h1>
      <p>Decrement</p>
    </div>
  )
}

export default App

