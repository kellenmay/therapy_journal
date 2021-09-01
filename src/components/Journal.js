import React from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchEntries, deleteEntry } from '../actions/entriesActions'


const Journal = (props) => {  

    const entries = useSelector(state => state.entries)

    const handleClick = (entry) => {
        console.log("delete")
        // useDispatch
        props.deleteEntry(entry)

    }

    return (
            <div>
                <h3>Welcome</h3>
                {entries.map(entry => <li key={entry.id}>  {entry.title} - {entry.body} <button onClick= { () =>  handleClick(entry)}>DELETE</button></li>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { entries: state.entries }
}





export default connect(mapStateToProps, ({ fetchEntries, deleteEntry }))(Journal)


// add a delete entry button and fetch request