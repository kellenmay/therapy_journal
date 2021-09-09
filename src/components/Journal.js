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
            <div className="journalEntry" container>
                {entries.map(entry => <ul className="journalEntries" key={entry.id}>  
                    Emotion: {entry.emotion} 
                    <br></br>
                    Title: {entry.title} 
                    <br></br> 
                    Body: {entry.body} 
                    <br></br>
                <button onClick= { () =>  handleClick(entry)}>DELETE</button><br></br></ul>)}
            </div>
        )
    }




export default connect(null, ({ fetchEntries, deleteEntry }))(Journal)

