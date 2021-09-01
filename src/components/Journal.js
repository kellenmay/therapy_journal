import React from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchEntries   } from '../actions/entriesActions'


const Journal = (props) => {  

const entries = useSelector(state => state.entries)
console.log(props)


return (
    <div>
            <h3>Welcome</h3>    
            {entries.map(entry => <li key={entry.id}>  {entry.user_id} - {entry.title} - {entry.body} </li>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { entries: state.entries }
}





export default connect(mapStateToProps, { fetchEntries })(Journal);


// add a delete entry button and fetch request