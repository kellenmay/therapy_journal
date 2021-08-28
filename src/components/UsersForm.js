import React, { Component } from 'react'
import { addUser } from '../actions/usersActions'
import { connect } from 'react-redux'

class UsersForm extends Component {
    
    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser({user: this.state})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Email: </label>
                <input type="text" value={this.state.username} onChange={this.handleChange} name="email" />
                <label>password: </label>
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                <input type="submit" value="Add User"/>
            </form>
        )
    }
}

export default connect(null, { addUser })(UsersForm)