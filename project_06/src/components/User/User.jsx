// import React from 'react'
import {useParams} from 'react-router-dom'

// Taking Data Dynamically using useParams hook 

// userid (name should be same what you have given in the route path)

const User = () => {
    const {userid} = useParams();

  return (
    <div>User : {userid}</div>
  )
}

export default User