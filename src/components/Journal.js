import React from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchEntries, deleteEntry } from '../actions/entriesActions'
import { useState } from 'react'

const Journal = (props) => {  

    const [ toggle, setToggle ] = useState(false)
    
    const entries = useSelector(state => state.entries)


    console.log(entries)
    const handleClick = (entry) => {
        // useDispatch
        props.deleteEntry(entry)
        
    }   
   
    const handleSort = () => {
        setToggle(!toggle)
        // return toggle ? entries.sort((a,b) => a.emotion > b.emotion ? 1 : -1) : entries
        
        if ( toggle === true) {
            return entries.sort((a,b) => a.emotion > b.emotion ? 1 : -1)
        } else if ( toggle === false) {
            return entries.sort((a,b) => a.id > b.id ? 1 : -1)
        }
    }
        

    return (
            <div className="journalEntry" container>
            <button onClick = { () => handleSort(entries)}>Sort by Emotion</button>
            <div>
                {entries.map(entry => <ul className="journalEntries" key={entry.id}>  
                    Emotion: {entry.emotion} 
                    <br></br>
                    Title: {entry.title} 
                    <br></br> 
                    Body: {entry.body} 
                    <br></br>
                <button onClick= { () =>  handleClick(entry)}>DELETE</button><br></br></ul>)}
            </div>
            </div>
        )
    }




export default connect(null, ({ fetchEntries, deleteEntry }))(Journal)

