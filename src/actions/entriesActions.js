export const fetchEntries = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000')
        .then(resp => resp.json())
        .then(entries => console.log('fetchEntries', entries))
    }

}   