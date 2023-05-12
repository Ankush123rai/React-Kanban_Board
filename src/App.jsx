import React from 'react'
import Home from './home/Home'
import Navbar from './components/navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Description from './components/description/Description'

const App = () => {
  return (
    <div>
       
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description' element={<Description/>}/>
        
      </Routes>
    </div>
  )
}

export default App