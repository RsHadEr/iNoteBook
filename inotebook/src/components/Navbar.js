import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
let history=useNavigate();
  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    history('/login');

  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">INoteBook</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        </ul>
     
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/signUp" role="button">SignUp</Link></form>:<Link className="btn btn-primary mx-1" onClick={handleLogout} role="button">LogOut</Link>}
      
      </div>
    </div>
</nav>
  )
}

export default Navbar
