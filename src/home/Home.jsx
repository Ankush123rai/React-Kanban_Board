import React from 'react'
import style from './Home.module.css'
import MainCard from '../components/mainCard/MainCard'

const Home = () => {
  return (
    <div className={style.home_container}>
       <div className={style.home_body}>
          <MainCard/>
       </div>
    </div>
  )
}

export default Home