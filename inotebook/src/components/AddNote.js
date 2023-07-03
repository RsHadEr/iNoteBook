import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""});

    const handleClick=(e)=>{
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})

    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
        console.log("changed");

    }

  return (
    
    <div>
            <form>
  <div className="mb-3">
    <h1>Add a Note</h1>
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
     </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default AddNote;
