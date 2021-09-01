export const addUser = (user) => {
    return (dispatch) => {
        console.log(dispatch)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'ADD_USER', payload: user }))
    }    
}


export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users }))
    }
}



