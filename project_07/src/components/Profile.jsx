import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

  const {user} = useContext(UserContext);

  if (!user) return <div>Please login first </div>

  return <div>Hey ! welcome {user.username} to this page</div>
  
}

export default Profile