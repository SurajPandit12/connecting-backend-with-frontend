import React, { useState } from 'react';
import './App.css';

function App() {
  const[form, setForm]=useState({})

let handleSubmit= (e) =>

 {
  setForm({
    ...form,  //copy the value of username
    [e.target.name] : e.target.value,
  })
 }

let handleForm= async (e)=>{
  e.preventDefault();
const response= await fetch('http://localhost:8080/demo', {
  method: 'GET'
})

const result=await response.text()
  console.log(result)
}

  return (
    <div>
      <form onSubmit={handleForm}>
    
        <label htmlFor="name">UserName</label>
        <input type="text" name="name" id="name"  onChange={handleSubmit}/>
        <br></br>

        <label htmlFor="pass">Password</label>
        <input type="text" name="pass" id="pass" onChange={handleSubmit} />
        <br></br>
        
        <input type="submit" value="Connect" />
      </form>
    </div>
  );
}

export default App;
