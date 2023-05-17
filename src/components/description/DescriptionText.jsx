import { TextField, TextareaAutosize,Button } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function DescriptionText() {

  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(true); 
   


  return (
    <div className="App" >
    {editing ? (<> <div style={{backgroundColor:"white"}}>
      <ReactQuill theme="snow" value={title} onChange={setTitle} /></div>
            <Button size ="small" variant='contained' sx={{marginTop:.5}} onClick={() => setEditing(false)}>submit</Button></>
          ) : ( <div  onClick={() => setEditing(true)} dangerouslySetInnerHTML={{
            __html: title,
            
          }}>
            </div>
          )}
  </div>
  );
}
