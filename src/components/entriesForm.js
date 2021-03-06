import React, { Component } from 'react'
import { addEntry } from '../actions/entriesActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


// functional don't have access to lifecycles methods, like didMount, they can only use Hooks. Class components can't se hooks.


class EntriesForm extends Component {

    state = {
        title:'',
        body: '',
        emotion: '',
        user_id: 1,
        journal_id: 1,
        added: false
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ 
        [name]: value,
        })
        
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addEntry(this.state)
        // this.props.history.push('/entries');
        this.setState({ added: true })

    }

    render() {
        return (
            <div className="entryForm">
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
            <input type="hidden" defaultValue= {1} onChange={this.handleChange}  name="user_id" />
            
            <input type="hidden" defaultValue={1} onChange={this.handleChange}  name="journal_id" />
            <br/>
            <input type='submit' value='Create Entry' />                     
            </form>
            {this.state.added === true && <Redirect to={'/users/1/entries'}/>}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { users: state.users     }
}


export default connect(mapStateToProps, { addEntry })(EntriesForm)