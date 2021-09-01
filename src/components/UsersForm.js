import React, { useState,  useEffect } from 'react'
import { addUser } from '../actions/usersActions'
import { connect } from 'react-redux'
import axios from "axios";


const UsersForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    
    if (user) {
        return <div>{user.name} is loggged in</div>;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const user = { email, password };
        const response = await axios.post(
            "http://localhost:3000/sessions",
            user
            );
            
            setUser(response.data)
            localStorage.setItem('user', response.data)
            console.log(response.data)
        };
        
        const handleLogout = () => {
            setUser({});
            setEmail("");
            setPassword("");
            localStorage.clear();
          };


        return (
            <form onSubmit={handleSubmit}>
        <label htmlFor="email">email: </label>
        <input
          type="text"
          value={email}
          placeholder="enter a email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button onClick={handleLogout}>logout</button>
      </form>
    );
};




export default connect(null, { addUser })(UsersForm)    