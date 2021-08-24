import { useDispatch, connect } from 'react-redux'
import React, { useEffect } from 'react';
import { fetchEntries } from '../actions/entriesActions'
import EntriesForm from './entriesForm'

// functional don't have access to lifecycles methods, like didMount, they can only use Hooks. Class components can't se hooks.

const EntriesContainer  = () => {

    const dispatch = useDispatch()
    useEffect(() => { dispatch(fetchEntries()) })
    

    return (
        <div className='entry'>
            <h3> Journal Entry </h3>
            <EntriesForm />
        </div>
    )
}


export default connect(null, { fetchEntries }) (EntriesContainer);
