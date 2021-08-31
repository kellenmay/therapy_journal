import React from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchEntries, editEntry } from '../actions/entriesActions'


const Journal = () => {  

const entries = useSelector(state => state.entries)

const handleClick = (e, entry) => {
    e.preventDefault() 
    editEntry(e, entry)
    // console.log(e.value)
}

return (
        <div>
            <h3>Welcome</h3>
            {entries.map(entry => <li key={entry.id}>  {entry.title} - {entry.body} <button onClick={(e) => handleClick(console.log(entry))}>EDIT</button></li>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { entries: state.entries }
}





export default connect(mapStateToProps, { fetchEntries })(Journal);


// add a delete entry button and fetch request