export const fetchEntries = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/entries')
        .then(resp => resp.json())
        .then(entries => dispatch({type: 'FETCH_ENTRIES', payload: entries})
        )
    }

}   