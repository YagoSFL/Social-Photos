import { combineReducers } from 'redux'
import dataReducer from '../reducers/dataReducer'

const rootReducer = combineReducers({
    gallery: dataReducer
})

export default rootReducer