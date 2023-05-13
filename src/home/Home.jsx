import React from 'react'
import style from './Home.module.css'
import MainCard from '../components/mainCard/MainCard'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div className={style.home_container}>
      <Navbar/>
       <div className={style.home_body}>
          <MainCard/>
       </div>
    </div>
  )
}

export default Home