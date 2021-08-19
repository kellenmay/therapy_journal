import React, { Component } from 'react'


// functional don't have access to lifecycles methods, like didMount, they can only use Hooks. Class components can't se hooks.


class  EntriesForm extends Component {

    state = {
        title:'',
        body: '',
        emotion: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        
        this.setState({
        [name]: value
    })
}

    render() {
        return (
            <form>
            <label>Title:</label>
                <input type='text' defaultValue={this.state.title} onChange={this.handleChange} title="title" />
                    <br />
            <label>Body:</label>
                <input type='text' defaultValue={this.state.body} onChange={this.handleChange} body="body" />
                    <br />
            <label>Emotion:</label>
                <input type='interger' defaultValue={this.state.emotion} onChange={this.handleChange} emotion="emotion" />
                    <br />
                    <imput type='submit' value="Create Entry" />
            </form>
        )
    }
}

export default EntriesForm
