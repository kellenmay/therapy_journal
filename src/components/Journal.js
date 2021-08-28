import React from 'react'
import { connect } from 'react-redux'


const Journal = ({ entries }) => {  

    return (
        <div>
            <h3>Welcome</h3>
            {entries.map(entry => <ul><li key={entry.id}>  {entry.title} - {entry.body} </li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { entries: state.entries }
}


export default connect(mapStateToProps)(Journal);


// add a delete entry button and fetch request