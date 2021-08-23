import React, { Component } from 'react'
import { addEntry } from '../actions/entriesActions'
import { connect } from 'react-redux'

// functional don't have access to lifecycles methods, like didMount, they can only use Hooks. Class components can't se hooks.


class  EntriesForm extends Component {

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
    this.props.addEntry(this.state)
}

    render() {
        return (
            <form onSubmit={this.handlesubmit}>

            <label>Title:</label>
                <input type='text' defaultValue={this.state.title} onChange={this.handleChange} title="title" />
                    <br />
            <label>Body:</label>
                <input type='text' defaultValue={this.state.body} onChange={this.handleChange} body="body" />
                    <br />
            <label>Emotion:</label>
                <input type='interger' defaultValue={this.state.emotion} onChange={this.handleChange} emotion="emotion" />
                    <br />
                    <input type="hidden" defaultValue={this.state.emotion} onChange={this.handleChange}  user_id="user_id" />
                    <input type="hidden" defaultValue={this.state.emotion} onChange={this.handleChange}  journal_id="journal_id" />
            <input type='submit' value="Create Entry" />
            </form>
        );
    }
}

export default connect( null, addEntry) (EntriesForm)
