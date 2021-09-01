export const entriesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ENTRIES':
            return action.payload
        case 'ADD_ENTRY':   
            return [...state, action.payload]
        case 'DELETE_ENTRY':   
        
            return state.filter( (entry) => entry.id !== action.payload.id)
        default:
            return state
    }
}
    