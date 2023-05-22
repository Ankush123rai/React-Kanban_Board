import { TextField,Button } from '@mui/material';
import React, { useState } from 'react';
import { getdes } from './storage';
import { v4 as uuid } from "uuid";


export default function DescriptionText() {
 const storedData = localStorage.getItem("des");
  var k=[]
  k=storedData ? JSON.parse(storedData) : []
  console.log (k);
    const dscr=k.reverse().find(e=>e.cardName==window.tag)
 
  
 
   const [title, setTitle] = useState(dscr==undefined ? 'Enter Description':dscr.description);
  const [editing, setEditing] = useState(false); 
   
   
  function handleSubmit(){
    setEditing(false)
    var tag= { id: uuid(), cardName:window.tag,description:title}
    var des = []
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
              <h3 onClick={() => setEditing(true)} style={{marginLeft:'2.3rem'}}>{title}</h3> 
            )}
  </div>
  );    
}
