import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const Profile = ({ entries }) => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user)
    return (
      isAuthenticated && ( 
       <div className="profile">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {/* {JSON.stringify(user, null, 2)} */}      

        </div>
      )
    )
  }


export default Profile;
