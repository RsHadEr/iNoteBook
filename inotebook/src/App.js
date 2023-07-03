import './App.css';
import React from 'react';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar></Navbar>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signUp' element={<SignUp/>} />
        </Routes>
    </Router>
    </NoteState>
    
      
    </>
  );
}

export default App;
