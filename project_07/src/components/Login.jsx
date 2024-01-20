import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext'

const Login = () => {
  return (
    <div>
        <h2>login</h2>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
    </div>
  )
}

export default Login