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

export default function Description(){
  return(<>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 10,
          width:"30rem",
          backgroundColor:"aliceblue" ,
          marginLeft:"30rem"
          
        },
      }}
    >
       <Paper elevation={3} >
         <div className={styles.main}>
         <div>
          < AccountBoxIcon fontSize="large"/>
          <TextField id="filled-basic" size="small"  label="Create Description page" variant="filled" />
         </div>
         <div>
         <Typography variant="h5" component="h2">
         <DescriptionIcon  fontSize="large"   /> Description
            </Typography>;
         
         
         <TextField  size="large"/>
         </div>
         <div>
         <Typography variant="h4" component="h2">
         <ListIcon   fontSize="large" /> Activity
            </Typography>;
          <Activity/>
         </div>
         </div>
       </Paper>
    </Box>


    </>
  )
}