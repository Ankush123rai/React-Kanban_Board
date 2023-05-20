import { TextField, TextareaAutosize,Button } from '@mui/material';
import React, { useState } from 'react';
import { getdes } from './storage';
import { v4 as uuid } from "uuid";


export default function DescriptionText() {


  const storedData = localStorage.getItem("des");
  var dscr=[]
  dscr=storedData ? JSON.parse(storedData) : []
  
  

  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(true); 
   
  
  function handleSubmit(){
    setEditing(false)
    var tag= { id: uuid(), cardName:window.tag ,discription:title }
    var des = 
    des=getdes()
    des.push(tag);
    localStorage.setItem("des", JSON.stringify(des));
    
   }
   


  
      


  return (
    <div className="App"  >
    {editing ? (<> <TextField
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               sx={{width:'100%'}}
               autoFocus/> 
              <Button size ="small" variant='contained' sx={{marginTop:.5}} onClick={handleSubmit}>submit</Button></>
            ) : (
              <h3 onClick={() => setEditing(true)}>{title}</h3>
            )}
  </div>
  );    
}
