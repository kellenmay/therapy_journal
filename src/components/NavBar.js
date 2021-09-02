
import {Link} from "react-router-dom";
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'



function NavBar() {
    return (
        <div id="nav-bar">
            <LoginButton />
            <LogoutButton />
            <Link to="/Login">
                <button> Login </button>
            </Link>
            <Link to="/">
                <button> Home</button>
            </Link>
            <Link to="/entries">
                <button> Your Journal</button>
            </Link>
            <Link to="/entries/new">
                <button> New Entry</button>
            </Link>
            {/* <Link to="/profile">
                <button id="profile">Profile</button>
            </Link>
            <Link to="/users/new">
                <button id="profile">Create Account</button>
            </Link> */}
{/*             
            <Link to="/profile">
                <button id="profile">Profile</button>
            </Link> */}


        </div>
    )
}


NavBar.defaultProps = {
    title: 'Journal Log',
}

export default NavBar
