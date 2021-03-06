export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_USER':   
            return [...state, action.payload]
        case "FETCH_USERS_ENTRIES":
            return action.payload
        default:
            return state
    }
}