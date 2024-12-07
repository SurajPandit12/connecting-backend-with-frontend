import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[form, setForm]=useState({})
  const[user, setUser]=useState([])
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
  method: 'POST',
  body:JSON.stringify(form),
  headers:{
    'Content-Type':'application/json'
  },
})

const result=await response.json()
  console.log(result)
}



let getUser= async ()=>{

const response= await fetch('http://localhost:8080/demo', {
  method: 'GET',
 

})

const result=await response.json()
  setUser(result)
}

useEffect(()=>{
  getUser();
},[])

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
      <div>
        <h2>User Data</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {user.map((e, index) => (
              <tr key={index}>
                <td>{e.username}</td>
                <td>{e.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
