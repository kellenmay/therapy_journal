export const entriesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ENTRIES':
            return action.payload
        default:
            return state
    }
}