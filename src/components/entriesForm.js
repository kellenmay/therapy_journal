import React, { Component } from 'react'
import { addEntry } from '../actions/entriesActions'
import { connect } from 'react-redux'

// functional don't have access to lifecycles methods, like didMount, they can only use Hooks. Class components can't se hooks.


class EntriesForm extends Component {

    state = {
        title:'',
        body: '',
        emotion: '',
        user_id: 1,
        journal_id: 1
    }
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
        [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addEntry()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            <label>Title:</label>
                <input type='text' defaultValue={this.state.title} onChange={this.handleChange} name="title" />
                    <br />
            <label>Body:</label>
                <input type='text' defaultValue={this.state.body} onChange={this.handleChange} name="body" />
                    <br />
            <label>Emotion:</label>
                <input type='interger' defaultValue={this.state.emotion} onChange={this.handleChange} name="emotion" />
                    <br />
            <input type="hidden" defaultValue={this.state.user_id} onChange={this.handleChange}  user_id= {1} />
            <input type="hidden" defaultValue={this.state.journal_id_id} onChange={this.handleChange}  journal_id= {1} />
            <br/>
            <input type='submit' value='Create Grad' />                     
            </form>
        );
    }
}



export default connect(null, { addEntry })(EntriesForm)