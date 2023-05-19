import React, { useState,useRef} from 'react'
import style from './Home.module.css'
import MainCard from '../components/mainCard/MainCard'
import Navbar from '../components/navbar/Navbar'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import EditIcon from '@mui/icons-material/Edit';

const Home = () => {
  const imageUrl="https://img.freepik.com/free-vector/modern-stylish-hexagonal-background-wallpaper_78370-720.jpg"

  const images=localStorage.getItem('image')
  const imageRef=useRef(null)
  
  const [selectedImage, setSelectedImage] = useState(images?images:imageUrl);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = imageRef;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setSelectedImage(e.target.result);
        localStorage.setItem('image',JSON.stringify(e.target.result))
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className={style.home_container}>
       <div className={style.home_body}>
          <div>
            {selectedImage && (
              <div className={style.home_body}
                style={{
                  backgroundImage: `url(${selectedImage})`,
                }}
              >
              <Navbar/>
              <MainCard/>
              </div>
            )}
            <input type="file" onChange={handleImageUpload} ref={imageRef} style={{display:"none"}}/>
          
    </div>

       </div>
     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        className={style.wallpaper}
      >
        <SpeedDialAction
          key="Upload"
          icon={<FileCopyIcon />}
          tooltipTitle="change wallpaper"
          onClick={() => imageRef.current.click()}
        />
      </SpeedDial>
    </Box> 
    </div>
  )
}

export default Home