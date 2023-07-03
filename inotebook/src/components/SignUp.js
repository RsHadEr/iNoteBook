import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
    let history=useNavigate();

    const handleSignUp= async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
             
             
            },
            body:JSON.stringify({name,email,password})});
          const json=await response.json(); 
          console.log(json);
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
    <div className='container'>
     <form onSubmit={handleSignUp}>
     <div className="form-group my-1" >
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' placeholder="Enter name" onChange={onChange} required />
   </div>
  <div className="form-group my-1" >
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' placeholder="Enter email" onChange={onChange} required/>
   </div>
  <div className="form-group my-1">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password" name='password' onChange={onChange} minLength={5} required/>
  </div>
  <div className="form-group my-1">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" placeholder="Password" name='cpassword' onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary my-2">Submit</button>
</form>
    </div>
  )
}

export default SignUp
