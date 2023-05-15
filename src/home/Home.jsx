import React, { useState } from 'react'
import style from './Home.module.css'
import MainCard from '../components/mainCard/MainCard'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  const imageUrl="https://images.designtrends.com/wp-content/uploads/2016/04/02133843/Beautiful-Horizon-Background.jpg"
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  const handleImageChange = (e) => {
   
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }else{
      setSelectedImage(imageUrl)
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
            <input type="file" onChange={handleImageChange} />
          
    </div>

       </div>
    </div>
  )
}

export default Home