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



export default function Description(){
  const [title, setTitle] = useState("List Name ");
  const [editing, setEditing] = useState(false);
  return(<>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 6,
          width:"30rem",
          backgroundColor:"aliceblue",
          marginLeft:"25rem",
        },
      }}
    >
       <Paper elevation={3} >
         <div className={styles.main}>
         <div style={{display:"flex"}}>
         < AccountBoxIcon fontSize="large"/>
            {editing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setEditing(false)}
                autoFocus
              />
            ) : (
              <h3 onClick={() => setEditing(true)}>{title}</h3>
            )}

        
          </div>
              
         <div>
         <Typography variant="h4  " component="h2">
         <DescriptionIcon  fontSize="large"   /> Description
            </Typography>;
         
         <DescriptionText/>
         </div><div>
         <div style={{display:    "flex "}}>
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