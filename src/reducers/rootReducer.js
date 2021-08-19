import { combineReducers } from 'redux'

import { entriesReducer } from './entriesReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
     users: usersReducer,
    entries: entriesReducer
})
