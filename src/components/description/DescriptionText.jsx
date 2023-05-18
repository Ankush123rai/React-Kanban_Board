import { TextField, TextareaAutosize,Button } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getdes } from './storage';
import { v4 as uuid } from "uuid";


export default function DescriptionText() {

  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(true); 
   
  
  function handleSubmit(){
    setEditing(false)
    var tag= { id: uuid(), cardName:window.tag }
    var des = []
    des=getdes()
    des.push(tag);
    localStorage.setItem("des", JSON.stringify(des));
    console.log(des)
   }
   


  
      


  return (
    <div className="App"  >
    {editing ? (<> <div style={{backgroundColor:"white"}}>
      <ReactQuill theme="snow" value={title} onChange={setTitle} /></div>
            <Button size ="small" variant='contained' sx={{marginTop:.5}} onClick={handleSubmit}>submit</Button></>
          ) : ( <div  onClick={() => setEditing(true)} dangerouslySetInnerHTML={{ __html: title, }}>
            </div>
          )}
  </div>
  );    
}
