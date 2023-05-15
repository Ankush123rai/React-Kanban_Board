import { TextField, TextareaAutosize,Button } from '@mui/material';
import React, { useState } from 'react';


export default function DescriptionText() {

  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(true);  


  return (
    <div className="App" >
      {editing ? (<>
               <TextField
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               sx={{width:'100%'}}
               autoFocus/> 
              <Button size ="small" variant='contained' sx={{marginTop:.5}} onClick={() => setEditing(false)}>submit</Button></>
            ) : (
              <h3 onClick={() => setEditing(true)}>{title}</h3>
            )}
     
        
    </div>
  );
}
