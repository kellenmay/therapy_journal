export const fetchEntries = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/entries')
        .then(resp => resp.json())
        .then(entries => dispatch({type: 'FETCH_ENTRIES', payload: entries})
        )
        
    }

}   

export const addEntry = (entry) => {
    console.log(entry)
    return dispatch => {
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