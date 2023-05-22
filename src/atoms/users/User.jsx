import React, { useState } from 'react'
import style from './User.module.css'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  })
  const  navigate = useNavigate()
  const userData=JSON.parse(localStorage.getItem('user'))
  const [users, setUsers] = useState(userData? [userData]:[])
  const [isActive, setIsActive] = useState(false)
  const [error, setError] = useState(false)

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName } = user
    if(firstName==='' && lastName===''){
      setError(true)
      return
    }
    const newUser = { ...user, id: new Date().getTime().toString() }
    setUsers([...users, newUser])
    setUser({ firstName: '', lastName: '' })
    setIsActive(true)
    localStorage.setItem('user', JSON.stringify(newUser))
  }
  if(isActive){
      navigate('/')
      }
  else{
  return (
    <div className={style.container}>
     <form onSubmit={handleSubmit}>
      <div className={error? style.error: style.form_div}>
      <label>FIRST NAME</label>
      <input type="text" name="firstName" onChange={handleInput} placeholder='enter your first name'/>
      <label>LAST NAME</label>
      <input type="text" name="lastName" onChange={handleInput} placeholder='enter your last name'/>
      </div>
      <button type="submit">Submit</button>
     </form>
    </div>
  )
}
}

export default User