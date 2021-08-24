export const entriesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ENTRIES':
            return action.payload
        case 'ADD_ENTRY':
            console.log(action.payload)
            return [...state, action.payload]
        default:
            return state
    }
    
}