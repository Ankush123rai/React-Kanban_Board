import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';  
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TextField from '@mui/material/TextField';
import DescriptionIcon from '@mui/icons-material/Description';
import ListIcon from '@mui/icons-material/List';
import Typography from '@mui/material/Typography';
import styles from './description.module.css'
import Activity from './Activity';
import { useState } from "react"
import DescriptionText from './DescriptionText';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';





export default function Description(){
  const [title, setTitle] = useState(window.tag);
  const [editing, setEditing] = useState(false);
 
  
    
  

  return(<>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 6,
          width:550,
          
          backgroundColor:"#D9DDDC",
          marginLeft:"24rem",
          borderRadius:'1rem'
        },
      }}
    >  
       <Paper elevation={3} >
       <IconButton sx={{marginLeft:"32rem" }}><Link to='/'><CloseIcon/></Link>  </IconButton>
         <div className={styles.main}>
         <div style={{display:"flex" ,marginTop:'-2rem'}}>
         <div style={{display:    "flex "}}>
         < AccountBoxIcon fontSize="large"/> 
         
         
            {editing ? (
              <TextField
              size='xtraSmall '
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setEditing(false)}
              autoFocus/>
              
            ) : (
              <Typography variant="h6" onClick={() => setEditing(true)} component="h2">{title} </Typography> 
              
            )}
            
            </div> 
          </div>
              
         <div > 
         <div style={{display:"flex "}}>
         <DescriptionIcon  fontSize="large"   />
         <Typography variant="h6" component="h2"> Description
            </Typography>;
          </div>
         <DescriptionText/>
         </div><div>
         <div style={{display:"flex "}}>
         <ListIcon   fontSize="large" ></ListIcon> <Typography variant="h6" component="h2">Activity   </Typography>  
         </div> 
          <Activity/>
          </div>
         </div>
       </Paper>
    </Box>


    </>
  )
}