import React from 'react'

const UserContext = React.createContext()

export default UserContext;



// This is the provider of userContext:

// <UserContext>
//     <Login/>
//     <Data>
//     <Card/>
//     </Data>
// </UserContext>