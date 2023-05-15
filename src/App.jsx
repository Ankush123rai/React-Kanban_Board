import React from 'react'
import Home from './home/Home'
import Navbar from './components/navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Description from './components/description/Description'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/description/:UserId' element={<Description/>}/>
        </Routes>
        <div>
       {/* <Navbar/> */}
        <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App