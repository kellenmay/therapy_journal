import React from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions/entriesActions'

const Journal = ({ entries }) => {  

    console.log(entries)
    return (
        <div>
            <h3>Welcome</h3>
            {entries.map(entry => <li key={entry.id}>  {entry.title} - {entry.body} </li>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { entries: state.entries }
}





export default connect(mapStateToProps, { fetchEntries})(Journal);


// add a delete entry button and fetch request