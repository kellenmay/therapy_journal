import React, { Component } from 'react'


import UsersForm from './UsersForm'


class UsersContainer extends Component {

    // componentDidMount(){
    //     this.props.addUser()
    // }

    render(){
        return(
            <div>
                Users Container
                <UsersForm />
            </div>
        )
    }
}

export default UsersContainer