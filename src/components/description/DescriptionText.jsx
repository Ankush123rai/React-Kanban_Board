import React, { useState } from 'react';


export default function DescriptionText() {

  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(true);  


  return (
    <div className="App" >
      {editing ? (<>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                
                autoFocus
              /><button onClick={() => setEditing(false)}>submit</button></>
            ) : (
              <h3 onClick={() => setEditing(true)}>{title}</h3>
            )}
     
        
    </div>
  );
}
