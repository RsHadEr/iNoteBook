import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) =>{
    const host ="http://localhost:5000"
    const notesInitial=[];

    const [notes,setNotes]=useState(notesInitial);

    //GET ALL NOTES

    let getNote= async ()=>{
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token'),"mode":'no-cors'
             
            },
          });
          const json=await response.json(); 
          console.log(json);
    
        setNotes(json);
    }

    //add a note
   const addNote= async (title,description,tag) =>{
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'),
         
        },
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      });
      const json=await response.json(); 

    setNotes(notes.concat(json));

    }
    //delete a note
   const deleteNote= async (id) =>{

    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),"mode":'no-cors'
       
      },
    });
    const json=await response.json(); 
    console.log(json);
    

   const newNotes=notes.filter((note)=>{
        return note._id!==id
    })

    setNotes(newNotes);


    }

    //edit a note
   const editNote= async (id,title,description,tag) =>{
   //API Call

   const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token'),  
    },
    body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
  });
  const json=await response.json(); 

  const newNotes=JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < notes.length; index++) {
        const element = newNotes[index];
        if(element._id===id)
        {
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
        
    }

    setNotes(newNotes);

    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
            {props.children}
        </NoteContext.Provider>
        
    )

} 

export default NoteState;