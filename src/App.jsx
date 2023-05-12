import React from 'react'
import Home from './home/Home'
import Navbar from './components/navbar/Navbar'
import { useSelector } from 'react-redux'

const App = () => {
  // const reduxState= useSelector(state=>state)
  // console.log(reduxState);
  return (
    <div>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default App