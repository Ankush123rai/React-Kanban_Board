import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TextField } from "@mui/material";
import { v4 as uuid } from 'uuid';


function Activity() {
  const [editorValue, setEditorValue] = useState("");
  const [activity, setActivity] = useState([  ]);
 


  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
     setActivity([ { id: uuid(), task:editorValue, time:showTime } ,...activity]);
   
    setEditorValue(editorValue  );
    setTime(time)
  };

 
  const handleKeypress = e => {
    
  if (e.keyCode === 13) {
    handleSubmit();
  }
};
const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds()
        +" "+ date.getDate()
        +"/"+ date.getMonth()
        +"/"+ date.getFullYear()
         const [time ,setTime]=useState(showTime)

  return (
    <div className="main-container-wrap">
      <form className="compose-form" onSubmit={handleSubmit}>
        <div  style={{display:'flex' ,gap:'.5rem',      }}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>KP</Avatar>
          <TextField
           size='small'
            value={editorValue}
            onKeyPress={handleKeypress}
            onChange={handleEditorValueChange}
            className="compose-form-textarea"
            placeholder="  Write a comment "
          />
        </div>
        
      </form>

      <div className="tweet-container" style={{marginLeft:"-.4rem",marginTop:'1rem'}}>
        {activity.map((curElm,index) => (
          <div  key={index} className="tweet">
            <Typography variant="h6" component="h2"
            style={{display:'flex' ,gap:'1rem' ,margin:'.5rem'}}> 
           <Avatar sx={{ bgcolor: deepOrange[500] }}>KP</Avatar>
           kamal panwar  {curElm.time}</Typography> 
           <Typography style={{display:'flex' ,marginLeft:"3.5rem"}}> {curElm.task}
           </Typography>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
