import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions/entriesActions'

const Profile = ({ entries }) => {
  const { user, isAuthenticated } = useAuth0();

  
    return (
      isAuthenticated && ( 
       <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {/* {JSON.stringify(user, null, 2)} */}      
          <h3>Welcome</h3>
          {entries.map(entry => <li key={entry.id}>  {entry.title} - {entry.body} <button>EDIT</button> </li>)}
        </div>
      )
    )
  }


const mapStateToProps = state => {
return { entries: state.entries }
}





export default connect(mapStateToProps, { fetchEntries})(Profile);
