import React, { useState } from 'react'
// import  {useState}  from 'react';
import { useEffect } from 'react'
import { Route } from 'react-router-dom';
<Route>
  <Route path="">
    element={<home/>}
  </Route>
</Route>
 function App() {
  // let [userName,setuserName]=useState("speed up");
  const [info,setInfo]=useState([]);
  async function callApi()
  {
    const res =await fetch("https://fakestoreapi.com/products");
    const ans = await res.json();
    setInfo(ans);

  }

  useEffect(()=>{
    callApi();
  },[])
 
  return (
    <div>
      {
      //  <h1>Hello Ankit</h1>
      // <h2>Hum dekh rhe he </h2>
      // {userName}
      // <button onClick={()=> {
      //   setuserName("Career bacha he")
      // }
      // }>Change</button> 
      
      // <p>{info[10]?.title}</p>

      info.map((item)=>{
       return (<p>{item.title}</p>)
      })
      
      }
    </div>
  )
}

export default App

