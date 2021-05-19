
// REDUCER
import { combineReducers } from 'redux'
import {storeItems} from '@/Store/data_store/data_store'

const rootReducer = combineReducers({
  storeItems
})

export default rootReducer
