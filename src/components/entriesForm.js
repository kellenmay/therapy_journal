import React, { Component } from 'react'


// functional don't have access to lifecycles methods, like didMount, they can only use Hooks. Class components can't se hooks.


class  EntriesForm extends Component {

    state = {
        title:'',
        body: '',
        emotion: ''
    }
    render() {
        return (
            <form>
            <label>Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} title="title" />
                    <br />
            <label>Body:</label>
                <input type='text' value={this.state.body} onChange={this.handleChange} title="title" />
                    <br />
            <label>Emotion:</label>
                <input type='interger' value={this.state.emotion} onChange={this.handleChange} title="title" />
                    <br />
                    <imput type='submit' value="Create Entry" />
            </form>
        )
    }
}

export default EntriesForm
