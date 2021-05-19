import { ActionsItems } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = { data: {}, status: 'fetch_init', message: '' }

function storeItems(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.storeItems }
    }
    case ActionsItems.LOAD_GET_ITEMS:
      return { ...state, data: action.data, status: 'fetch_loading' }
    case ActionsItems.RES_GET_ITEMS:
      return { ...state, data: action.data, status: 'fetch_result' }
    case ActionsItems.ERR_GET_ITEMS:
      return {
        ...state,
        data: {},
        status: 'fetch_error',
        message: 'Error...',
      }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default storeItems
