import React, { useContext } from 'react'
import { UserData } from '../context/UserDataContext'

const Contact = () => {
  const user = useContext(UserData)

  return (
    <div>
      <h1>Contact</h1>
      <p>{user.name} - {user.age}</p>
    </div>
  )
}

export default Contact