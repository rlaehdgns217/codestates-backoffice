
import {combineReducers} from 'redux'
import changeCohortState from '../actions/changeCohortState'

const rootReducer = combineReducers({
    changeCohortState,
})

export default rootReducer;