import { useContext } from 'react';
import React from 'react';
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context=useContext(noteContext);
    const {deleteNote}=context;
    const {note,updateNote}=props;
  return (
    <div className='col-md-3'>
        <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    
    <button className='btn btn-space' onClick={()=>{deleteNote(note._id)}}>Delete</button>
    <button className='btn btn-space' onClick={()=>{ 
      console.log("updated");
      updateNote(note)}}>Edit</button>
    
    
    
  </div>
  
</div>

      
    </div>
  )
}

export default Noteitem
