import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [credentials,setCredentials]=useState({email:"",password:""});
    let history=useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
             
             
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json=await response.json(); 
          console.log(json.authToken);
         
          if(json.success)
          {
            localStorage.setItem('token',json.authToken);
            history('/');

          }
          
    
       
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }


  return (
    <div className='container mx-3'>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} required/>
    </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} placeholder="Password" onChange={onChange} required/>
  </div>
  <button type="submit" className="btn btn-primary my-2">Submit</button>
</form>
      
    </div>
  )
}

export default Login
