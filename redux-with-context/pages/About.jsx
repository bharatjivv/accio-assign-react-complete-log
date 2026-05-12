import React, { useContext } from 'react'
import { UserData } from '../context/UserDataContext'

const About = () => {

  const user = useContext(UserData);

  return (
    <div>
      <h1>About </h1>
      <p>{user.name} - {user.age}</p>
    </div>
  )
}

export default About