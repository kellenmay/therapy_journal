import React from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchEntries, deleteEntry } from '../actions/entriesActions'


const Journal = (props) => {  

    const entries = useSelector(state => state.entries)

    const handleClick = (entry) => {
        // useDispatch
        props.deleteEntry(entry)

    }

    return (
            <div className="journalEntry">
                <h3>Welcome</h3>
                {entries.map(entry => <li key={entry.id}>  Emotion:{entry.emotion} Title:{entry.title} <br></br> Body:{entry.body} <br></br><button onClick= { () =>  handleClick(entry)}>DELETE</button></li>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { entries: state.entries }
}





export default connect(mapStateToProps, ({ fetchEntries, deleteEntry }))(Journal)


// add a delete entry button and fetch request