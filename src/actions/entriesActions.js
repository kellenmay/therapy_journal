export const fetchEntries = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/users/1/entries')
        .then(resp => resp.json())
        .then(entries => dispatch({type: 'FETCH_ENTRIES', payload: entries})
        )
        
    }

}   

export const addEntry = (entry) => {
    return (dispatch, getState) => {
    fetch('http://127.0.0.1:3000/entries', {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(entry => dispatch({type: 'ADD_ENTRY', payload: entry})
    )
}
}

export const editEntry = (entry) => {

    return dispatch => {
    fetch(`http://127.0.0.1:3000/entries/${entry.id}`, {
        method: 'PATCH',
        body: JSON.stringify(entry),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(entry => dispatch({type: 'EDIT_ENTRY', payload: entry})
    )
}
}

export const deleteEntry = (entry) => {
    return (dispatch) => {
    fetch(`http://127.0.0.1:3000/entries/${entry.id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(entry => dispatch({type: 'DELETE_ENTRY', payload: entry})
    )
}
}