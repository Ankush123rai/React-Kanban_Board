import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Activity() {
  const [editorValue, setEditorValue] = useState("");
  const [activity, setActivity] = useState([]);


  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(editorValue);
     setActivity([ editorValue, ...activity ]);
    setEditorValue("");
  };

  function handleFormSubmit(value) {
    console.log(`Submitting: ${value}`);
  }
  const handleKeypress = e => {
    
  if (e.keyCode === 13) {
    handleFormSubmit();
  }
};
const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds()
        +" "+ date.getDate()
        +"/"+ date.getMonth()
        +"/"+ date.getFullYear()

  return (
    <div className="main-container-wrap">
      <form className="compose-form" onSubmit={handleSubmit}>
        <div className="compose-form-container" style={{display:'flex' ,gap:'.5rem', margin:'.5rem'}}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>KP</Avatar>
          <input
            value={editorValue}
            onKeyPress={handleKeypress}
            onChange={handleEditorValueChange}
            className="compose-form-textarea"
            placeholder="  Write a comment "
          />
        </div>
        
      </form>

      <div className="tweet-container">
        {activity.map((tweet, index) => (
          <div  key={index} className="tweet">
            <Typography variant="h6" component="h2"
            style={{display:'flex' ,gap:'1rem' ,margin:'.5rem'}}> 
           <Avatar sx={{ bgcolor: deepOrange[500] }}>KP</Avatar>
           kamal panwar  {showTime}</Typography> 
           <Typography style={{display:'flex' ,marginLeft:"3.5rem"}}> {tweet}
            <br/></Typography>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
